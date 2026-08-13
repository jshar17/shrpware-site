"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Platform = "macOS" | "Windows";
type PlatformFilter = "All" | Platform;

type GalleryShot = {
  id: string;
  platform: Platform;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  title: string;
  description: string;
  alt: string;
};

const SHOTS: GalleryShot[] = [
  {
    id: "windows-record-private",
    platform: "Windows",
    src: "/apps/waveplume/gallery/windows-record-private.webp",
    thumbnail: "/apps/waveplume/gallery/windows-record-private-thumb.webp",
    width: 1920,
    height: 1080,
    title: "Record meetings without the cloud",
    description:
      "Capture system audio, microphone, screen, or a single window—with a live preview and one-click quality presets.",
    alt: "WavePlume Windows recording setup with the headline Record meetings without the cloud",
  },
  {
    id: "windows-searchable-transcripts",
    platform: "Windows",
    src: "/apps/waveplume/gallery/windows-searchable-transcripts.webp",
    thumbnail: "/apps/waveplume/gallery/windows-searchable-transcripts-thumb.webp",
    width: 1920,
    height: 1080,
    title: "Every word becomes searchable",
    description:
      "Transcribe locally with Whisper, search and edit the transcript, then select any timestamp to replay that exact moment.",
    alt: "WavePlume Windows transcript with the headline Every word becomes searchable",
  },
  {
    id: "windows-your-folders",
    platform: "Windows",
    src: "/apps/waveplume/gallery/windows-your-folders.webp",
    thumbnail: "/apps/waveplume/gallery/windows-your-folders-thumb.webp",
    width: 1920,
    height: 1080,
    title: "Your meetings. Your folders.",
    description:
      "Browse sessions, import media, trim clips, play recordings, and export audio—all in folders you choose.",
    alt: "WavePlume Windows session library with the headline Your meetings, your folders",
  },
  {
    id: "mac-record-setup",
    platform: "macOS",
    src: "/apps/waveplume/gallery/record-setup-macos.webp",
    thumbnail: "/apps/waveplume/gallery/record-setup-macos-thumb.webp",
    width: 1600,
    height: 1000,
    title: "Choose exactly what to capture",
    description:
      "Set the screen, app, window, microphone, and internal meeting audio before recording begins.",
    alt: "WavePlume record setup on macOS",
  },
  {
    id: "mac-transcript",
    platform: "macOS",
    src: "/apps/waveplume/gallery/transcript-macos.webp",
    thumbnail: "/apps/waveplume/gallery/transcript-macos-thumb.webp",
    width: 1600,
    height: 1000,
    title: "Turn the recording into searchable text",
    description:
      "Transcription runs on the Mac and keeps timestamps connected to the meeting recording.",
    alt: "WavePlume local transcript on macOS",
  },
  {
    id: "mac-sessions",
    platform: "macOS",
    src: "/apps/waveplume/gallery/sessions-macos.webp",
    thumbnail: "/apps/waveplume/gallery/sessions-macos-thumb.webp",
    width: 1600,
    height: 1000,
    title: "Keep every output together",
    description:
      "Open recent sessions and find the recording, transcript, subtitles, and supporting files in one place.",
    alt: "WavePlume sessions and tools on macOS",
  },
  {
    id: "mac-settings",
    platform: "macOS",
    src: "/apps/waveplume/gallery/settings-macos.webp",
    thumbnail: "/apps/waveplume/gallery/settings-macos-thumb.webp",
    width: 1600,
    height: 1000,
    title: "Set the workflow once",
    description:
      "Choose the recording library, quality, audio behavior, and meeting defaults that fit your work.",
    alt: "WavePlume recording settings on macOS",
  },
];

const FILTERS: PlatformFilter[] = ["All", "macOS", "Windows"];

export function WavePlumeGallery() {
  const [filter, setFilter] = useState<PlatformFilter>("All");
  const [activeId, setActiveId] = useState(SHOTS[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const featureButtonRef = useRef<HTMLButtonElement>(null);
  const lightboxPanelRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const visibleShots = useMemo(
    () => SHOTS.filter((shot) => filter === "All" || shot.platform === filter),
    [filter],
  );
  const activeShot =
    visibleShots.find((shot) => shot.id === activeId) ?? visibleShots[0];
  const activeIndex = visibleShots.findIndex((shot) => shot.id === activeShot.id);

  function changeFilter(nextFilter: PlatformFilter) {
    const nextShots = SHOTS.filter(
      (shot) => nextFilter === "All" || shot.platform === nextFilter,
    );
    setFilter(nextFilter);
    setActiveId(nextShots[0].id);
  }

  const showRelative = useCallback((offset: number) => {
    const nextIndex =
      (activeIndex + offset + visibleShots.length) % visibleShots.length;
    setActiveId(visibleShots[nextIndex].id);
  }, [activeIndex, visibleShots]);

  function closeLightbox() {
    setIsOpen(false);
    window.setTimeout(() => featureButtonRef.current?.focus(), 0);
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showRelative(-1);
      if (event.key === "ArrowRight") showRelative(1);
      if (event.key === "Tab") {
        const controls = Array.from(
          lightboxPanelRef.current?.querySelectorAll<HTMLElement>("button") ?? [],
        );
        const firstControl = controls[0];
        const lastControl = controls[controls.length - 1];
        if (!firstControl || !lastControl) return;

        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault();
          lastControl.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault();
          firstControl.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, showRelative]);

  return (
    <section className="wave-gallery-section" id="gallery">
      <div className="wave-gallery-heading">
        <div>
          <p className="section-number">01 / PRODUCT TOUR</p>
          <h2>See the whole<br />workflow.</h2>
        </div>
        <div className="wave-gallery-intro">
          <p>
            See how WavePlume moves from private capture to searchable local
            transcripts and organized session files. Choose a platform, then open any view full size.
          </p>
          <div className="gallery-filters" aria-label="Filter screenshots by platform">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => changeFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="wave-gallery-stage">
        <button
          ref={featureButtonRef}
          className="wave-gallery-feature"
          type="button"
          aria-label={`Open ${activeShot.title} full size`}
          onClick={() => setIsOpen(true)}
        >
          <img
            key={activeShot.id}
            src={activeShot.src}
            alt={activeShot.alt}
            width={activeShot.width}
            height={activeShot.height}
            loading="lazy"
            decoding="async"
          />
          <span className="gallery-expand">Open full size ↗</span>
        </button>
        <div className="wave-gallery-caption" aria-live="polite">
          <div>
            <span>{activeShot.platform} / {String(activeIndex + 1).padStart(2, "0")}</span>
            <h3>{activeShot.title}</h3>
          </div>
          <p>{activeShot.description}</p>
        </div>
      </div>

      <div className="gallery-thumbnail-rail" aria-label="WavePlume screenshots">
        {visibleShots.map((shot, index) => (
          <button
            key={shot.id}
            className={shot.id === activeShot.id ? "is-active" : undefined}
            type="button"
            aria-label={`Show ${shot.title}`}
            aria-current={shot.id === activeShot.id ? "true" : undefined}
            onClick={() => setActiveId(shot.id)}
          >
            <span>{String(index + 1).padStart(2, "0")} / {shot.platform}</span>
            <img
              src={shot.thumbnail}
              alt=""
              width={480}
              height={Math.round((480 / shot.width) * shot.height)}
              loading="lazy"
              decoding="async"
            />
            <strong>{shot.title}</strong>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-dialog-title"
          onClick={closeLightbox}
        >
          <div
            ref={lightboxPanelRef}
            className="gallery-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              if (Math.abs(distance) > 50) showRelative(distance > 0 ? -1 : 1);
              touchStartX.current = null;
            }}
          >
            <div className="gallery-lightbox-header">
              <div>
                <span>{activeShot.platform}</span>
                <h3 id="gallery-dialog-title">{activeShot.title}</h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close full-size screenshot"
                onClick={closeLightbox}
              >
                Close ×
              </button>
            </div>
            <div className="gallery-lightbox-image">
              <img
                src={activeShot.src}
                alt={activeShot.alt}
                width={activeShot.width}
                height={activeShot.height}
                decoding="async"
              />
            </div>
            <div className="gallery-lightbox-footer">
              <p>{activeShot.description}</p>
              <div>
                <button type="button" aria-label="Previous screenshot" onClick={() => showRelative(-1)}>← Previous</button>
                <span>{activeIndex + 1} / {visibleShots.length}</span>
                <button type="button" aria-label="Next screenshot" onClick={() => showRelative(1)}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
