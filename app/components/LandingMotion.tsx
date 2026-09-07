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

export function SignalSculpture() {
  return <div className="signal-sculpture" aria-hidden="true">
    <div className="signal-halo" />
    <svg className="signal-surface" viewBox="0 0 720 650" fill="none">
      <defs>
        <linearGradient id="surface-fill" x1="0" y1="0" x2="430" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#17344a" stopOpacity=".65" /><stop offset="1" stopColor="#262444" stopOpacity=".8" /></linearGradient>
        <linearGradient id="surface-edge"><stop stopColor="#9aeaff" /><stop offset="1" stopColor="#b6a6ff" /></linearGradient>
        <linearGradient id="scan-light"><stop stopColor="#9aeaff" stopOpacity="0" /><stop offset="1" stopColor="#9aeaff" stopOpacity=".2" /></linearGradient>
      </defs>
      <g transform="matrix(1 -.12 .38 1 82 172)">
        <path d="M 0 12 L 0 312 L 430 312 L 430 12" stroke="#8194cc" strokeOpacity=".2" />
        <rect width="430" height="300" rx="6" fill="url(#surface-fill)" stroke="url(#surface-edge)" strokeOpacity=".4" />
        <path d="M 0 300 H 430" stroke="url(#surface-edge)" strokeWidth="2" />
        {Array.from({length: 14}, (_, i) => {
          const y = 38 + i * 17;
          const points = Array.from({length: 65}, (_, j) => {
            const x = 22 + j * 3.4;
            const envelope = Math.sin(Math.PI * j / 64) ** 2;
            const wave = Math.sin(j * .23 + i * .42) * envelope * 15;
            return `${j === 0 ? "M" : "L"} ${x.toFixed(1)} ${(y+wave).toFixed(1)}`;
          }).join(" ");
          return <path className="surface-wave" key={i} d={points} stroke="#9aeaff" strokeWidth="1.4" opacity={.3 + i%3*.16} style={{animationDelay:`${-i*.18}s`}} />;
        })}
        {Array.from({length: 12}, (_, i) => <g key={i} opacity={i%4===0 ? .9 : .48}>
          <path d={`M 264 ${48+i*18} h ${i%4===0 ? 104 : 55+(i*17)%65}`} stroke={i%4===0 ? "#c4baff" : "#b1c5dc"} strokeWidth={i%4===0 ? 4 : 2} strokeLinecap="round" />
        </g>)}
        <g className="surface-scan">
          <rect x="200" y="1" width="44" height="298" fill="url(#scan-light)" />
          <path d="M 244 1 V 299" stroke="#bbf3ff" strokeWidth="2" />
          <path d="M 237 0 H 251 M 237 300 H 251" stroke="#e0faff" strokeWidth="3" />
        </g>
      </g>
    </svg>
  </div>;
}
export function AudioSignal() {
  return <div className="audio-signal" aria-hidden="true">{Array.from({length: 45}, (_, i) => <span key={i} style={{"--bar-height": `${12 + ((i * 29 + i*i * 7) % 64)}px`, "--bar-delay": `${-i*.13}s`} as CSSProperties} />)}</div>;
}
