import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "../../Brand";
import { WavePlumeGallery } from "./WavePlumeGallery";

const APP_STORE_URL = "https://apps.apple.com/us/app/waveplume/id6797359772";

export const metadata: Metadata = {
  title: "WavePlume™ — Private meeting recorder | ShrpWare",
  description: "Record meetings and create searchable transcripts locally on Mac and Windows. No bot, no account, no cloud upload.",
  alternates: {
    canonical: "/apps/waveplume",
  },
  openGraph: {
    title: "WavePlume™ — Private meeting recorder",
    description: "Record meetings and create searchable transcripts locally on Mac and Windows. No bot, no account, no cloud upload.",
    url: "/apps/waveplume",
    siteName: "ShrpWare",
    type: "website",
    images: [
      {
        url: "/apps/waveplume/hero-card.webp",
        width: 1600,
        height: 600,
        alt: "WavePlume meeting recording and transcription",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WavePlume™ — Private meeting recorder",
    description: "Private local meeting recording and transcription for Mac and Windows.",
    images: ["/apps/waveplume/hero-card.webp"],
  },
};

const SOFTWARE_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WavePlume",
  applicationCategory: "BusinessApplication",
  operatingSystem: "macOS 15+, Windows 10/11",
  description:
    "A private meeting recorder and transcriber that runs on your computer without a meeting bot or cloud upload.",
  url: "https://shrpware.com/apps/waveplume",
  image: "https://shrpware.com/apps/waveplume/hero-card.webp",
  author: {
    "@type": "Organization",
    name: "ShrpWare",
    url: "https://shrpware.com",
  },
};

export default function WavePlumePage() {
  return (
    <main className="product-page wave-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_SCHEMA) }}
      />
      <header className="product-header">
        <Brand />
        <nav><Link href="/">Store</Link><a href="/apps/waveplume/support">Support</a><a href="/apps/waveplume/privacy">Privacy</a><a href={APP_STORE_URL}>Mac App Store ↗</a></nav>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="product-overline">SHRPWARE / APP 01</p>
          <img className="hero-app-icon" src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="WavePlume icon" width="128" height="128" fetchPriority="high" />
          <h1>WavePlume<sup className="trademark">™</sup></h1>
          <p className="product-page-tagline">Every wave becomes a word.</p>
          <p className="product-page-lede">A private meeting recorder and transcriber that runs on your computer. No bot joins your call. Nothing is uploaded.</p>
          <div className="platform-row"><span>macOS 15+</span><span>Windows 10/11 · Preview</span><span>macOS · Submitted for review</span></div>
          <div className="hero-actions"><a className="button product-button" href={APP_STORE_URL}>Mac App Store ↗</a><a className="button product-button" href="#gallery">See the app <span>↓</span></a></div>
        </div>
        <div className="product-hero-media wave-hero-media">
          <img src="/apps/waveplume/hero-card.webp" alt="WavePlume banner with the plume-wave mark and audio-wave ribbons" width="1600" height="600" fetchPriority="high" decoding="async" />
        </div>
      </section>

      <section className="privacy-strip"><span>NO ACCOUNT</span><span>NO MEETING BOT</span><span>LOCAL TRANSCRIPTION</span><span>YOUR FILES</span></section>

      <WavePlumeGallery />

      <section className="product-content" id="features">
        <div className="product-intro"><p className="section-number">02 / WHY WAVEPLUME</p><h2>Keep the meeting.<br />Skip the cloud.</h2><p>Capture a display, app, window, or audio-only meeting. WavePlume writes recordings and searchable transcripts to a library you choose.</p></div>
        <div className="feature-grid">
          <article><span>01</span><h3>Record the right source</h3><p>Choose internal meeting audio, a microphone, or both, with a live preview before recording starts.</p></article>
          <article><span>02</span><h3>Transcribe locally</h3><p>Whisper-powered transcription runs on your machine. Your meeting audio is never part of a model download request.</p></article>
          <article><span>03</span><h3>Own the output</h3><p>Keep plain media, transcript, subtitle, and session files in the recording library you select.</p></article>
        </div>
      </section>

      <section className="product-cta">
        <p className="section-number">03 / APP STORE</p><h2>WavePlume 1.2.2 is submitted for review.</h2><p>The Mac App Store listing is ready with the current screenshots, privacy details, and local-first product description. Availability begins after Apple completes review and the release is approved.</p>
        <div className="cta-links"><a href={APP_STORE_URL}>View on the Mac App Store ↗</a><a href="/apps/waveplume/support">Read support notes →</a><a href="/apps/waveplume/privacy">Privacy policy →</a></div>
      </section>
      <footer className="product-footer"><Link href="/">← ShrpWare store</Link><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
