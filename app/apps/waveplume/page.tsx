import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "../../Brand";
import { WavePlumeGallery } from "./WavePlumeGallery";

const MICROSOFT_STORE_URL = "https://apps.microsoft.com/detail/9p6h8n3vjxbx?hl=en-US&gl=US";

const TRIAL_DOWNLOAD_URL = "https://pub-6e5446faa8bf4deb83894211caf0c1a2.r2.dev/waveplume/WavePlume-Trial-1.2.5-Setup.exe";

const MAC_APP_STORE_URL = "https://apps.apple.com/us/app/waveplume/id6797359772";

export const metadata: Metadata = {
  title: "WavePlume™ — Private Meeting Recorder & Offline Transcription",
  description: "Record meetings on Mac and Windows and create searchable transcripts locally with Whisper. Capture system audio, microphone, screen, or a window—without a bot or cloud upload.",
  keywords: [
    "private meeting recorder",
    "meeting transcription",
    "local Whisper transcription",
    "offline transcription",
    "Mac meeting recorder",
    "Windows meeting recorder",
    "system audio recorder",
    "searchable meeting transcripts",
  ],
  alternates: {
    canonical: "/apps/waveplume",
  },
  openGraph: {
    title: "WavePlume™ — Private Meeting Recorder & Offline Transcription",
    description: "Record meetings on Mac and Windows and create searchable transcripts locally with Whisper—without a meeting bot or cloud upload.",
    url: "/apps/waveplume",
    siteName: "ShrpWare",
    type: "website",
    images: [
      {
        url: "/apps/waveplume/gallery/windows-record-private.webp",
        width: 1920,
        height: 1080,
        alt: "WavePlume private meeting recording on Windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WavePlume™ — Private Meeting Recorder & Offline Transcription",
    description: "Private meeting recording and local Whisper transcription for Mac and Windows.",
    images: ["/apps/waveplume/gallery/windows-record-private.webp"],
  },
};

const SOFTWARE_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WavePlume",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows 10, Windows 11, macOS 15",
  description:
    "A private meeting recorder and transcriber for Windows and Mac that captures system audio, microphone, and screen, then creates searchable transcripts locally with Whisper.",
  url: "https://shrpware.com/apps/waveplume",
  image: "https://shrpware.com/apps/waveplume/gallery/windows-record-private.webp",
  downloadUrl: MICROSOFT_STORE_URL,
  softwareRequirements: "Windows 10 build 19041 or later, or macOS 15 or later",
  offers: {
    "@type": "Offer",
    price: "14.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "System audio, microphone, screen, window, and audio-only recording",
    "On-device Whisper transcription",
    "Searchable transcripts with clickable timestamps",
    "Local session folders with media, transcripts, and subtitles",
  ],
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
        <nav><Link href="/">Store</Link><a href="#features">Features</a><a href="/apps/waveplume/support">Support</a><a href="/apps/waveplume/privacy">Privacy</a><a href={MAC_APP_STORE_URL} target="_blank" rel="noreferrer">Mac App Store ↗</a><a href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Microsoft Store ↗</a></nav>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="product-overline">SHRPWARE / APP 01</p>
          <img className="hero-app-icon" src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="WavePlume icon" width="128" height="128" fetchPriority="high" />
          <h1>WavePlume<sup className="trademark">™</sup></h1>
          <p className="product-page-tagline">Every wave becomes a word.</p>
          <p className="product-page-lede">Capture system audio, microphone, screen, or a single window, then create searchable transcripts locally with Whisper. No meeting bot. No cloud upload.</p>
          <div className="platform-row"><span>Windows 10/11 · Available now</span><span>macOS 15+ · On the Mac App Store</span><span>No account · No subscription</span></div>
          <div className="hero-actions">{TRIAL_DOWNLOAD_URL && <a className="button product-button" href="#download">Download free trial ↓</a>}<a className="button product-button" href={MAC_APP_STORE_URL} target="_blank" rel="noreferrer">Get it on the Mac App Store ↗</a><a className="button product-button" href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Get it from Microsoft ↗</a><a className="button product-button" href="#gallery">See the app <span>↓</span></a></div>
        </div>
        <div className="product-hero-media wave-hero-media">
          <img src="/apps/waveplume/hero-wave.webp" alt="WavePlume plume-wave mark over cyan and violet audio waves" width="1600" height="900" fetchPriority="high" decoding="async" />
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

      {TRIAL_DOWNLOAD_URL && <section className="trial-section" id="download">
        <p className="section-number">03 / TRY IT FREE</p>
        <h2>Try WavePlume free on Windows for 14 days.</h2>
        <p className="trial-lede">Download the trial for Windows and record and transcribe meetings locally on your PC — no account, no meeting bot, no cloud upload. After 14 days, keep WavePlume with a $14.99 one-time purchase from the Microsoft Store. On Mac, WavePlume is a $14.99 one-time purchase on the Mac App Store.</p>
        <a className="trial-download" href={TRIAL_DOWNLOAD_URL} target="_blank" rel="noreferrer">↓ Download free trial</a>
        <p className="trial-meta">Windows 10/11 · x64 · v1.2.5 · 92 MB · Free 14-day trial</p>
        <ol className="trial-steps">
          <li><b>1</b><p><strong>Run the installer</strong> from your Downloads. It installs just for you — no administrator password needed.</p></li>
          <li><b>2</b><p><strong>If “Windows protected your PC” appears,</strong> the trial isn’t code-signed yet. Click <strong>More info</strong>, then <strong>Run anyway</strong> to continue.</p></li>
          <li><b>3</b><p><strong>Record your first meeting.</strong> Choose a screen, window, or audio source; WavePlume transcribes locally with Whisper when you stop.</p></li>
        </ol>
        <p className="trial-meta">Want automatic updates? <a href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer" style={{ color: "var(--cyan)" }}>Get WavePlume on the Microsoft Store ↗</a></p>
      </section>}

      <section className="product-cta">
        <p className="section-number">04 / GET WAVEPLUME</p><h2>Get WavePlume for Mac or Windows.</h2><p>WavePlume is $14.99 on both platforms — a one-time purchase, not a subscription. Buy it on the Mac App Store or the Microsoft Store, or try it free on Windows for 14 days first. Both record meetings and create searchable transcripts locally, with no meeting bot, account, or cloud upload.</p>
        <p className="trial-meta">$14.99 is US pricing; local prices vary. WavePlume for Mac is not currently sold in EU territories.</p>
        <div className="cta-links"><a href={MAC_APP_STORE_URL} target="_blank" rel="noreferrer">Get it on the Mac App Store ↗</a><a href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Get it from Microsoft ↗</a><a href="/apps/waveplume/support">Read support notes →</a><a href="/apps/waveplume/privacy">Privacy policy →</a></div>
      </section>
      <footer className="product-footer"><Link href="/">← ShrpWare store</Link><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
