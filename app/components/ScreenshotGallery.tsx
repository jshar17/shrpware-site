"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

export function ScreenshotGallery({ items, label }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeGallery = useCallback(() => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    window.setTimeout(() => {
      if (previousIndex !== null) triggerRefs.current[previousIndex]?.focus();
    }, 0);
  }, [activeIndex]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? 0 : (current - 1 + items.length) % items.length);
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? 0 : (current + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();

      // Keep Tab inside the dialog. Without this the focus ring walks off into
      // the page behind the backdrop, which is still fully interactive.
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
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeGallery, showNext, showPrevious]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

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

      {activeItem && activeIndex !== null ? (
        <div
          ref={dialogRef}
          className="screenshot-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} screenshot gallery`}
        >
          <button className="screenshot-lightbox-backdrop" type="button" tabIndex={-1} onClick={closeGallery} aria-label="Close screenshot gallery" />
          <button className="screenshot-lightbox-close" type="button" onClick={closeGallery} ref={closeRef}>
            Close <span aria-hidden="true">×</span>
          </button>
          <div className="screenshot-lightbox-body">
            <button className="screenshot-lightbox-nav" type="button" onClick={showPrevious} aria-label="Previous screenshot">←</button>
            <figure>
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                decoding="async"
              />
              <figcaption><span>{activeItem.caption}</span><span>{activeIndex + 1} / {items.length}</span></figcaption>
            </figure>
            <button className="screenshot-lightbox-nav" type="button" onClick={showNext} aria-label="Next screenshot">→</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
