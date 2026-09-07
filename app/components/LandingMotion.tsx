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
      {Array.from({length: 42}, (_, i) => {
        const o = i * 2.7;
        const d = `M ${545-o*.46} ${105+o*.45} C ${390-o*.8} ${-25+o*.52}, ${98+o*.15} ${95+o*.35}, ${176+o*.1} ${247+o*.34} C ${236+o*.22} ${351+o*.12}, ${543-o*.48} ${231+o*.75}, ${528-o*.15} ${382+o*.51} C ${506-o*.13} ${546+o*.17}, ${250+o*.34} ${620-o*.32}, ${107+o*.49} ${452-o*.12}`;
        return <path key={i} d={d} stroke="url(#signal-spectrum)" strokeWidth={i%7===0 ? 1.9 : 1.05} opacity={.42+i/85} />;
      })}
      <path className="signal-traveler" d="M 520 130 C 340 10 100 105 180 264 C 249 360 520 267 518 410 C 495 565 268 585 130 445" stroke="url(#signal-glint)" strokeWidth="3" pathLength="100" />
    </svg>
  </div>;
}

export function AudioSignal() {
  return <div className="audio-signal" aria-hidden="true">{Array.from({length: 45}, (_, i) => <span key={i} style={{"--bar-height": `${12 + ((i * 29 + i*i * 7) % 64)}px`, "--bar-delay": `${-i*.13}s`} as CSSProperties} />)}</div>;
}
