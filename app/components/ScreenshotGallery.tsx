"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal, flushSync } from "react-dom";

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Small variant used for the grid. Omit it and the grid loads `src` at full size. */
  thumbnail?: string;
};

type ScreenshotGalleryProps = {
  items: Screenshot[];
  label: string;
};

// The grid renders each shot at roughly a third of the 1060px content column,
// and full width once the layout collapses at 860px.
const GRID_SIZES = "(max-width: 860px) 92vw, 340px";
// Horizontal travel needed to count as a swipe, and how much more horizontal
// than vertical it must be before we treat it as one rather than a page scroll.
const SWIPE_PX = 50;
const SWIPE_RATIO = 1.5;
// Pointer travel past which a release is a pan, not a click.
const DRAG_SLOP_PX = 5;

export function ScreenshotGallery({ items, label }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [panning, setPanning] = useState(false);

  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const panFrom = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const swipeFrom = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  const closeGallery = useCallback(() => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    setZoomed(false);
    window.setTimeout(() => {
      if (previousIndex !== null) triggerRefs.current[previousIndex]?.focus();
    }, 0);
  }, [activeIndex]);

  const showPrevious = useCallback(() => {
    setZoomed(false);
    setActiveIndex((current) => current === null ? 0 : (current - 1 + items.length) % items.length);
  }, [items.length]);

  const showNext = useCallback(() => {
    setZoomed(false);
    setActiveIndex((current) => current === null ? 0 : (current + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    // The dialog is portalled to <body>, so the page behind it can be marked
    // inert without disabling the dialog itself. The focus trap below handles
    // keyboard users; this is what stops a screen reader wandering out.
    const shell = document.querySelector<HTMLElement>("main.site-shell");
    const shellWasInert = shell ? shell.inert : false;
    if (shell) shell.inert = true;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // While zoomed, Escape steps back out rather than losing your place.
        if (zoomed) setZoomed(false);
        else closeGallery();
      }
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();

      // Keep Tab inside the dialog. Without this the focus ring walks off into
      // the page behind the backdrop.
      if (event.key === "Tab") {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>("button:not([tabindex='-1'])") ?? [],
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (shell) shell.inert = shellWasInert;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, zoomed, closeGallery, showNext, showPrevious]);

  // Zoom toward the point that was clicked, so clicking the transcript pane
  // lands on the transcript pane rather than the middle of the screenshot.
  const toggleZoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    if (zoomed) {
      setZoomed(false);
      return;
    }
    const image = imageRef.current;
    if (!image) return;
    const box = image.getBoundingClientRect();
    const relX = (event.clientX - box.left) / box.width;
    const relY = (event.clientY - box.top) / box.height;
    // Commit the zoom synchronously so the viewport is actually scrollable
    // before we position it — assigning scrollLeft while nothing overflows just
    // clamps to 0. requestAnimationFrame is not a substitute: it does not fire
    // in a tab that is not painting, which silently loses the scroll position.
    flushSync(() => setZoomed(true));
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollLeft = relX * viewport.scrollWidth - viewport.clientWidth / 2;
    viewport.scrollTop = relY * viewport.scrollHeight - viewport.clientHeight / 2;
  };

  const startPan = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!zoomed) return;
    // Touch already pans the scroll container natively; hijacking it here would
    // fight the browser and lose momentum scrolling. Drag-to-pan is for mice.
    if (event.pointerType === "touch") return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    panFrom.current = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop };
    viewport.setPointerCapture(event.pointerId);
    setPanning(true);
  };

  const movePan = (event: React.PointerEvent<HTMLDivElement>) => {
    const from = panFrom.current;
    const viewport = viewportRef.current;
    if (!from || !viewport) return;
    viewport.scrollLeft = from.left - (event.clientX - from.x);
    viewport.scrollTop = from.top - (event.clientY - from.y);
  };

  const endPan = (event: React.PointerEvent<HTMLDivElement>) => {
    const from = panFrom.current;
    if (!from) return;
    // A drag that ends over the image would otherwise fire a click and un-zoom.
    if (Math.hypot(event.clientX - from.x, event.clientY - from.y) > DRAG_SLOP_PX) {
      suppressClick.current = true;
    }
    panFrom.current = null;
    setPanning(false);
  };

  const activeItem = activeIndex === null ? null : items[activeIndex];

  const lightbox = activeItem && activeIndex !== null ? (
    <div
      ref={dialogRef}
      className="screenshot-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${label} screenshot gallery`}
      onTouchStart={(event) => {
        if (zoomed) return; // while zoomed a drag pans instead of navigating
        const touch = event.changedTouches[0];
        swipeFrom.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
      }}
      onTouchEnd={(event) => {
        const from = swipeFrom.current;
        const touch = event.changedTouches[0];
        swipeFrom.current = null;
        if (!from || !touch) return;
        const dx = touch.clientX - from.x;
        const dy = touch.clientY - from.y;
        if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy) * SWIPE_RATIO) return;
        if (dx > 0) showPrevious();
        else showNext();
      }}
    >
      <button className="screenshot-lightbox-backdrop" type="button" tabIndex={-1} onClick={closeGallery} aria-label="Close screenshot gallery" />
      <button className="screenshot-lightbox-close" type="button" onClick={closeGallery} ref={closeRef}>
        Close <span aria-hidden="true">×</span>
      </button>
      <div className="screenshot-lightbox-body">
        <button className="screenshot-lightbox-nav" type="button" onClick={showPrevious} aria-label="Previous screenshot">←</button>
        <figure>
          <div
            ref={viewportRef}
            className={`screenshot-lightbox-viewport${zoomed ? " is-zoomed" : ""}${panning ? " is-panning" : ""}`}
            onPointerDown={startPan}
            onPointerMove={movePan}
            onPointerUp={endPan}
            onPointerCancel={endPan}
          >
            <button
              className="screenshot-lightbox-zoom"
              type="button"
              onClick={toggleZoom}
              aria-pressed={zoomed}
              aria-label={zoomed ? "Zoom out to fit the screen" : "Zoom in to full size"}
            >
              <img
                ref={imageRef}
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                decoding="async"
                draggable={false}
              />
            </button>
          </div>
          <figcaption>
            <span>{activeItem.caption}</span>
            <span>{zoomed ? "Full size" : "Select to zoom"} · {activeIndex + 1} / {items.length}</span>
          </figcaption>
        </figure>
        <button className="screenshot-lightbox-nav" type="button" onClick={showNext} aria-label="Next screenshot">→</button>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="gallery-grid gallery-grid-three screenshot-gallery" aria-label={`${label} screenshots`}>
        {items.map((item, index) => (
          <figure key={item.src}>
            <button
              className="screenshot-gallery-trigger"
              type="button"
              onClick={() => setActiveIndex(index)}
              ref={(element) => { triggerRefs.current[index] = element; }}
              aria-label={`View ${item.caption} in the ${label} gallery`}
            >
              <img
                src={item.thumbnail ?? item.src}
                srcSet={item.thumbnail ? `${item.thumbnail} 640w, ${item.src} ${item.width}w` : undefined}
                sizes={item.thumbnail ? GRID_SIZES : undefined}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
              <span aria-hidden="true">View gallery</span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {lightbox && typeof document !== "undefined" ? createPortal(lightbox, document.body) : null}
    </>
  );
}
