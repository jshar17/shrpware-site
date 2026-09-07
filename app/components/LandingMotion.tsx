"use client";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export function LandingMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [motionChoice, setMotionChoice] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => { setPaused(preference.matches); setMotionChoice(false); };
    syncPreference();
    preference.addEventListener("change", syncPreference);
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
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return <div ref={root} className={`landing-experience${paused ? " motion-paused" : ""}`} data-motion-opt-in={motionChoice && !paused ? "true" : undefined}>
    <button className="motion-control" type="button" aria-pressed={paused} onClick={() => { setPaused(!paused); setMotionChoice(true); }}>
      <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>{paused ? "Motion paused" : "Pause motion"}
    </button>
    {children}
  </div>;
}

export function SignalSculpture() {
  return <div className="signal-sculpture" aria-hidden="true">
    <div className="signal-halo" />
    <svg className="signal-ribbon" viewBox="0 0 720 650" fill="none">
      <defs>
        <linearGradient id="signal-spectrum" x1="100" y1="70" x2="550" y2="570" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9aeaff" /><stop offset=".35" stopColor="#57a9df" /><stop offset=".6" stopColor="#8480f4" /><stop offset="1" stopColor="#ffbd9f" />
        </linearGradient>
        <linearGradient id="signal-glint"><stop stopColor="#ffffff" stopOpacity="0" /><stop offset=".5" stopColor="#ffffff" /><stop offset="1" stopColor="#ffffff" stopOpacity="0" /></linearGradient>
      </defs>
      <g className="signal-audio-sheet">
        {Array.from({length: 34}, (_, i) => {
          const o = i * 4;
          return <path key={i} d={`M 80 ${310+o} C 210 ${320+o}, 205 ${85+o*.5}, 345 ${155+o*.7} C 460 ${215+o*.7}, 490 ${285+o*.4}, 640 ${145+o*.5}`} stroke="url(#signal-spectrum)" strokeWidth={i%6===0 ? 2 : 1} opacity={.5+i/90} />;
        })}
        <path className="signal-traveler" d="M 80 374 C 210 384 205 117 345 200 C 460 260 490 311 640 177" stroke="url(#signal-glint)" strokeWidth="3" pathLength="100" />
      </g>
      <g className="signal-text-sheet">
        {Array.from({length: 25}, (_, i) => {
          const o = i * 5;
          return <path key={i} d={`M ${140+o*.3} ${475+o*.22} L ${345+o*.14} ${305+o*.5} L ${545+o*.3} ${440+o*.32}`} stroke="url(#signal-spectrum)" strokeWidth={i%5===0 ? 2 : 1} opacity={.45+i/70} />;
        })}
      </g>
    </svg>
  </div>;
}

export function AudioSignal() {
  return <div className="audio-signal" aria-hidden="true">{Array.from({length: 45}, (_, i) => <span key={i} style={{"--bar-height": `${12 + ((i * 29 + i*i * 7) % 64)}px`, "--bar-delay": `${-i*.13}s`} as CSSProperties} />)}</div>;
}
