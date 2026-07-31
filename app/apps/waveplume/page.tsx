import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "../../Brand";

export const metadata: Metadata = {
  title: "WavePlume — Private meeting recorder | ShrpWare",
  description: "Record meetings and create searchable transcripts locally on Mac and Windows. No bot, no account, no cloud upload.",
};

export default function WavePlumePage() {
  return (
    <main className="product-page wave-page">
      <header className="product-header">
        <Brand />
        <nav><Link href="/">Store</Link><a href="/apps/waveplume/support">Support</a><a href="/apps/waveplume/privacy">Privacy</a></nav>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="product-overline">SHRPWARE / APP 01</p>
          <img className="hero-app-icon" src="/apps/waveplume/icon.png" alt="WavePlume icon" />
          <h1>WavePlume</h1>
          <p className="product-page-tagline">Every wave becomes a word.</p>
          <p className="product-page-lede">A private meeting recorder and transcriber that runs on your computer. No bot joins your call. Nothing is uploaded.</p>
          <div className="platform-row"><span>macOS 15+</span><span>Windows 10/11</span><span>In development</span></div>
          <a className="button product-button" href="#features">See how it works <span>↓</span></a>
        </div>
        <div className="product-hero-media">
          <img src="/apps/waveplume/ready.png" alt="WavePlume recording setup screen" />
        </div>
      </section>

      <section className="privacy-strip"><span>NO ACCOUNT</span><span>NO MEETING BOT</span><span>LOCAL TRANSCRIPTION</span><span>YOUR FILES</span></section>

      <section className="product-content" id="features">
        <div className="product-intro"><p className="section-number">01 / WHY WAVEPLUME</p><h2>Keep the meeting.<br />Skip the cloud.</h2><p>Capture a display, app, window, or audio-only meeting. WavePlume writes recordings and searchable transcripts to a library you choose.</p></div>
        <div className="feature-grid">
          <article><span>01</span><h3>Record the right source</h3><p>Choose internal meeting audio, a microphone, or both, with a live preview before recording starts.</p></article>
          <article><span>02</span><h3>Transcribe locally</h3><p>Whisper-powered transcription runs on your machine. Your meeting audio is never part of a model download request.</p></article>
          <article><span>03</span><h3>Own the output</h3><p>Keep plain media, transcript, subtitle, and session files in the recording library you select.</p></article>
        </div>
      </section>

      <section className="screenshot-section">
        <div className="screenshot-copy"><p className="section-number">02 / TRANSCRIPT</p><h2>Click a timestamp.<br />Hear the moment.</h2><p>Search and correct a local transcript, then jump straight to the matching point in the recording.</p></div>
        <img src="/apps/waveplume/transcript.png" alt="WavePlume transcript with linked timestamps" />
      </section>

      <section className="product-cta">
        <p className="section-number">03 / STATUS</p><h2>WavePlume is being prepared for release.</h2><p>Support and privacy documentation are already available while the app moves toward its first public version.</p>
        <div className="cta-links"><a href="/apps/waveplume/support">Read support notes →</a><a href="/apps/waveplume/privacy">Privacy policy →</a></div>
      </section>
      <footer className="product-footer"><Link href="/">← ShrpWare store</Link><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
