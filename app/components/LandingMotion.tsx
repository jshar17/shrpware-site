"use client";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

export function LandingMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("has-arrived");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    element.querySelectorAll("[data-arrival]").forEach((item) => observer.observe(item));
    const visibility = () => element.classList.toggle("landing-hidden", document.hidden);
    document.addEventListener("visibilitychange", visibility);
    visibility();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return <div ref={root} className="landing-experience">{children}</div>;
}

export function AudioSignal() {
  return <div className="audio-signal" aria-hidden="true">{Array.from({length: 45}, (_, i) => <span key={i} style={{"--bar-height": `${12 + ((i * 29 + i*i * 7) % 64)}px`, "--bar-delay": `${-i*.13}s`} as CSSProperties} />)}</div>;
}
