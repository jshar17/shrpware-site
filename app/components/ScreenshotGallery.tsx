"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

type ScreenshotGalleryProps = {
  items: Screenshot[];
  label: string;
};

export function ScreenshotGallery({ items, label }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

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
              <img src={item.src} alt={item.alt} />
              <span aria-hidden="true">View gallery</span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {activeItem && activeIndex !== null ? (
        <div
          className="screenshot-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} screenshot gallery`}
        >
          <button className="screenshot-lightbox-backdrop" type="button" onClick={closeGallery} aria-label="Close screenshot gallery" />
          <button className="screenshot-lightbox-close" type="button" onClick={closeGallery} ref={closeRef}>
            Close <span aria-hidden="true">×</span>
          </button>
          <div className="screenshot-lightbox-body">
            <button className="screenshot-lightbox-nav" type="button" onClick={showPrevious} aria-label="Previous screenshot">←</button>
            <figure>
              <img src={activeItem.src} alt={activeItem.alt} />
              <figcaption><span>{activeItem.caption}</span><span>{activeIndex + 1} / {items.length}</span></figcaption>
            </figure>
            <button className="screenshot-lightbox-nav" type="button" onClick={showNext} aria-label="Next screenshot">→</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
