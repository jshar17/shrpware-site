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
      // the lab's logo: a phasor diagram, three phases a third of a cycle apart
      <svg viewBox="0 0 48 48"><rect width="48" height="48" rx="14" fill="#16294d" /><circle cx="24" cy="24" r="15" fill="none" stroke="#83a9d6" strokeWidth="1.5" opacity=".5" /><path d="M24 24V11.5M24 24 13.2 30.3M24 24 34.8 30.3" stroke="#edf6fb" strokeWidth="3" strokeLinecap="round" /><circle cx="24" cy="11.5" r="3.4" fill="#5cdbc3" /><circle cx="13.2" cy="30.3" r="3.4" fill="#5aa9ff" /><circle cx="34.8" cy="30.3" r="3.4" fill="#f5a15a" /><circle cx="24" cy="24" r="2.3" fill="#edf6fb" /></svg>
    ),
  },
  {
    name: "Planning Standards Academy",
    href: "https://lab.shrpware.com/academy/",
    shown: "lab.shrpware.com/academy",
    text: "Five courses on transmission planning: NERC TPL-001, ERCOT's planning criteria, building the cases, proving the models and getting connected.",
    glyph: (
      // the academy's logo: a mortarboard, its tassel amber
      <svg viewBox="0 0 48 48"><rect width="48" height="48" rx="14" fill="#2a2346" /><path d="M7 19.5 24 12l17 7.5L24 27 7 19.5Z" fill="none" stroke="#f3eefc" strokeWidth="3" strokeLinejoin="round" /><path d="M14.5 23.2v6.6c0 2.9 4.3 5 9.5 5s9.5-2.1 9.5-5v-6.6" fill="none" stroke="#b8a9e6" strokeWidth="2.4" strokeLinecap="round" /><path d="M38 21v7.5" stroke="#f3eefc" strokeWidth="2" strokeLinecap="round" /><circle cx="38" cy="31" r="3.4" fill="#ffc24d" /></svg>
    ),
  },
  {
    name: "Grid Watch",
    href: "https://grid.shrpware.com/",
    shown: "grid.shrpware.com",
    text: "ERCOT, NERC, PUCT and Texas Legislature activity in one place: today's meetings, new documents and a morning digest.",
    glyph: (
      // Grid Watch's own logo, as its header draws it
      <svg viewBox="0 0 48 48"><rect width="48" height="48" rx="14" fill="#12334b" /><path d="M33 14H18l-5 5v14l5 5h15V25H24" fill="none" stroke="#edf6fb" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 25h6M24 14v6M24 32v6" stroke="#83b5c8" strokeWidth="2" strokeLinecap="round" /><circle cx="33" cy="14" r="4" fill="#5cdbc3" /></svg>
    ),
  },
  {
    name: "Store",
    href: "/#apps",
    shown: "shrpware.com",
    internal: true,
    text: "WavePlume, private meeting transcription, and DeltaTxt, a code editor for compare and merge. For Mac and Windows.",
    glyph: (
      // ShrpWare's own mark (public/favicon.svg)
      <img src="/favicon.svg" alt="" width={64} height={64} />
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
