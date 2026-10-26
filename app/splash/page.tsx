import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SafeLink as Link } from "@/app/components/SafeLink";
import "./splash.css";

// A page to hand out: every ShrpWare site in one place. Nothing on the main site links here, and it stays out of the
// sitemap and search results.
export const metadata: Metadata = {
  title: { absolute: "Everything from ShrpWare" },
  description: "Three Phase Lab, the Planning Standards Academy, Grid Watch and the ShrpWare store in one place.",
  alternates: { canonical: "/splash" },
  robots: { index: false, follow: true },
};

type Place = { name: string; href: string; shown: string; text: string; glyph: ReactNode; internal?: boolean };

const places: Place[] = [
  {
    name: "Three Phase Lab",
    href: "https://lab.shrpware.com/",
    shown: "lab.shrpware.com",
    text: "Power system simulators that run in your browser: a generator, line protection, stability, steady state, FACTS devices and distribution planning.",
    glyph: (
      // three phases, a third of a cycle apart
      <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.2" strokeLinecap="round">
        <path d="M3 20c3.5-11 7-11 10.5 0s7 11 10.5 0 7-11 10.5 0" stroke="#9aeaff" />
        <path d="M3 26.5c2.8-4.6 5.9-7.6 9.2-6.4 3.6 1.3 6 11 9.6 11.4 3.1.4 6.2-7.1 9.2-15" stroke="#c7ff2f" opacity=".85" />
        <path d="M3 13.5c2.8 4.6 5.9 7.6 9.2 6.4 3.6-1.3 6-11 9.6-11.4 3.1-.4 6.2 7.1 9.2 15" stroke="#ffbd9f" opacity=".85" />
      </svg>
    ),
  },
  {
    name: "Planning Standards Academy",
    href: "https://lab.shrpware.com/academy/",
    shown: "lab.shrpware.com/academy",
    text: "Five courses on transmission planning: NERC TPL-001, ERCOT's planning criteria, building the cases, proving the models and getting connected.",
    glyph: (
      // a stack of standards
      <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 28.5 20 34l14-5.5" stroke="#ffbd9f" opacity=".55" />
        <path d="M6 22.5 20 28l14-5.5" stroke="#ffbd9f" opacity=".8" />
        <path d="M20 6 6 11.5 20 17l14-5.5L20 6Z" stroke="#ffbd9f" />
        <path d="M6 11.5v5L20 22l14-5.5v-5" stroke="#ffbd9f" />
      </svg>
    ),
  },
  {
    name: "Grid Watch",
    href: "https://grid.shrpware.com/",
    shown: "grid.shrpware.com",
    text: "ERCOT, NERC, PUCT and Texas Legislature activity in one place: today's meetings, new documents and a morning digest.",
    glyph: (
      // a pulse on the grid
      <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 10h30M5 20h30M5 30h30" stroke="#ffffff" opacity=".14" />
        <path d="M4 22h8l3-9 5 16 4-11 2 4h10" stroke="#c7ff2f" />
        <circle cx="34" cy="22" r="2.4" fill="#c7ff2f" />
      </svg>
    ),
  },
  {
    name: "Store",
    href: "/#apps",
    shown: "shrpware.com",
    internal: true,
    text: "WavePlume, private meeting transcription, and DeltaTxt, a code editor for compare and merge. For Mac and Windows.",
    glyph: (
      // two apps
      <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        <rect x="5" y="9" width="14" height="22" rx="4" stroke="#9aeaff" />
        <path d="M9 17v6M12 15v10M15 18v4" stroke="#9aeaff" />
        <rect x="22" y="9" width="13" height="22" rx="4" stroke="#e9f4fa" opacity=".8" />
        <path d="M25.5 15h6M25.5 20h4M25.5 25h6" stroke="#e9f4fa" opacity=".8" />
      </svg>
    ),
  },
];

export default function SplashPage() {
  return (
    <div className="splash">
      <div className="splash-wrap">
        <header className="splash-head">
          <Link className="splash-mark" href="/" aria-label="ShrpWare home">
            <img src="/brand/shrpware-wordmark.svg" alt="ShrpWare" width={136} height={36} />
          </Link>
          <a className="splash-contact" href="mailto:support@shrpware.com">Contact</a>
        </header>

        <main className="splash-main">
          <h1>Everything<br /><span>from ShrpWare.</span></h1>
          <p className="splash-lede">Power system simulators, planning courses, a tracker for the Texas grid, and the apps.</p>
          <ul className="splash-grid">
            {places.map((p) => {
              const inner = (
                <>
                  <span className="splash-glyph" aria-hidden="true">{p.glyph}</span>
                  <h2>{p.name} <span className="splash-arrow" aria-hidden="true">↗</span></h2>
                  <p>{p.text}</p>
                  <span className="splash-url">{p.shown}</span>
                </>
              );
              return (
                <li key={p.name}>
                  {p.internal ? <Link className="splash-card" href={p.href}>{inner}</Link> : <a className="splash-card" href={p.href}>{inner}</a>}
                </li>
              );
            })}
          </ul>
        </main>

        <footer className="splash-foot">
          <span>© 2026 ShrpWare</span>
          <a href="mailto:support@shrpware.com">support@shrpware.com</a>
        </footer>
      </div>
    </div>
  );
}
