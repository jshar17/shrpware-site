import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { SafeLink as Link } from "./components/SafeLink";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { LandingMotion, SignalSculpture, AudioSignal } from "./components/LandingMotion";
import "./landing.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-landing-display", display: "swap" });

export const metadata: Metadata = {
  title: "Apps with an edge",
  description: "Independent desktop software for work that matters. Record and transcribe locally with WavePlume. Edit, compare, and debug with DeltaTxt. Mac + Windows. No subscription.",
  alternates: { canonical: "/" },
};
const organizationJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "ShrpWare", url: "https://shrpware.com", email: "support@shrpware.com", logo: "https://shrpware.com/brand/shrpware-wordmark.svg" };

export default function Home() {
  return <main id="top" className={`site-shell landing ${display.variable}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    <LandingMotion>
      <SiteHeader />
      <section className="studio-hero landing-wrap" aria-labelledby="hero-title">
        <div className="studio-hero-copy">
          <p className="landing-label"><span className="live-dot" />Independent software. Personal computing.</p>
          <h1 id="hero-title">Apps with<br /><em>an edge.</em></h1>
          <p className="landing-intro">Capture every conversation with WavePlume.<br className="desktop-break" /> Edit, compare, and code with DeltaTxt.</p>
          <div className="landing-actions"><Link className="landing-button" href="#apps">Find your app <span aria-hidden="true">↘</span></Link><span className="platform-note">Made for<br /><strong>Mac + Windows</strong></span></div>
        </div>
        <SignalSculpture />
        <div className="hero-bottom"><span>Powerful tools. A lighter footprint.</span><a href="#apps" aria-label="Scroll to the apps">Meet your next daily driver <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="apps" className="landing-catalog landing-wrap" aria-labelledby="catalog-title">
        <div className="landing-section-heading" data-arrival><p className="landing-label">The collection</p><h2 id="catalog-title">Two apps.<br /><span>Room to do more.</span></h2><p>Purpose-built desktop tools.<br />Your files stay in your hands.</p></div>
        <article className="landing-product wave-product" data-arrival>
          <div className="product-story">
            <div className="landing-app-name"><img src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="" width={56} height={56} /><span>WavePlume<small>Recording + transcription</small></span></div>
            <h3>Be in the meeting.<br /><em>Keep every word.</em></h3>
            <p>Record system audio and your microphone, then turn the conversation into searchable text with local Whisper. No bot in the call. No audio uploaded for transcription.</p>
            <AudioSignal />
            <Link className="landing-product-link" href="/apps/waveplume">Explore WavePlume <span aria-hidden="true">↗</span></Link>
            <p className="landing-product-meta">Mac + Windows <span>·</span> $14.99 once</p>
          </div>
          <div className="product-stage wave-stage"><div className="stage-label"><span className="signal-dot" />Your conversation → your transcript</div><img src="/apps/waveplume/hero-windows-transcript-20260906.webp" alt="WavePlume for Windows showing a sample meeting transcript with timestamps and editing tools" width={1426} height={893} loading="lazy" /><div className="stage-footer"><span>Recorded locally.</span><span>Ready when you need it.</span></div></div>
        </article>
        <article className="landing-product delta-product" data-arrival>
          <div className="product-story">
            <div className="landing-app-name"><img src="/apps/deltatxt/icon-160.webp" alt="" width={56} height={56} /><span>DeltaTxt<small>Text + code + comparison</small></span></div>
            <h3>Less digging.<br /><em>More doing.</em></h3>
            <p>Find and replace across files. Compare versions. Merge with control. Built natively for Mac in Swift, with Python editing and debugging on Windows.</p>
            <div className="delta-change" aria-hidden="true"><span>− searching for the difference</span><span>+ seeing exactly what changed</span></div>
            <Link className="landing-product-link" href="/apps/deltatxt">Explore DeltaTxt <span aria-hidden="true">↗</span></Link>
            <p className="landing-product-meta">Mac + Windows <span>·</span> Freeware</p>
          </div>
          <div className="product-stage delta-stage"><div className="stage-label"><span className="signal-cross">+</span>Small details. Big difference.</div><img src="/apps/deltatxt/hero-windows-debug.webp" alt="DeltaTxt Python debugger on Windows with source code and its docked output panel" width={1672} height={941} loading="lazy" /><div className="stage-footer"><span>Find. Edit. Compare.</span><span>Stay in your flow.</span></div></div>
        </article>
      </section>

      <section id="standard" className="landing-standard landing-wrap" aria-labelledby="standard-title">
        <div className="landing-section-heading" data-arrival><p className="landing-label">The ShrpWare way</p><h2 id="standard-title">Your computer.<br /><span>Your call.</span></h2><p>Software should make your day simpler.<br />That’s the standard we build to.</p></div>
        <div className="landing-values">
          <article data-arrival><span className="value-symbol" aria-hidden="true">↗</span><h3>Open the app.<br />Get to work.</h3><p>No account to create. No profile to complete. Start with the task you came to do.</p></article>
          <article data-arrival><span className="value-symbol" aria-hidden="true">∞</span><h3>Useful software.<br />Simple pricing.</h3><p>WavePlume is a one-time purchase. DeltaTxt is free. Neither needs a subscription.</p></article>
          <article data-arrival><span className="value-symbol" aria-hidden="true">⌘</span><h3>Keep your files.<br />Keep your options.</h3><p>Local recordings, transcripts, text, and code. Files you can open and use outside the app.</p></article>
        </div>
      </section>
      <section className="landing-workflows landing-wrap" aria-labelledby="workflow-title" data-arrival>
        <div><p className="landing-label">Start with your work</p><h2 id="workflow-title">What’s on your desk?</h2></div>
        <div className="workflow-links">
          <Link href="/use-cases/offline-meeting-transcription"><span>Meeting notes, without the bot</span><b aria-hidden="true">↗</b></Link>
          <Link href="/use-cases/python-ide-debugger"><span>A Python script to figure out</span><b aria-hidden="true">↗</b></Link>
          <Link href="/use-cases/find-replace-text-files"><span>The same change across a hundred files</span><b aria-hidden="true">↗</b></Link>
          <Link href="/use-cases/file-comparison-merge"><span>Two versions. One clear answer.</span><b aria-hidden="true">↗</b></Link>
        </div>
      </section>
      <section className="landing-finale landing-wrap" data-arrival><p className="landing-label">Make a little room for focus.</p><h2>Good tools.<br /><em>Great headspace.</em></h2><div className="landing-actions"><Link className="landing-button" href="/apps/waveplume">Meet WavePlume <span aria-hidden="true">↗</span></Link><Link className="landing-button landing-button-quiet" href="/apps/deltatxt">Get DeltaTxt free <span aria-hidden="true">↗</span></Link></div></section>
      <SiteFooter />
    </LandingMotion>
  </main>;
}
