import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "WavePlume — Private local meeting transcription",
  description: "Record system audio and your microphone, then transcribe meetings locally with Whisper. No bot, cloud upload, account, or subscription.",
  alternates: { canonical: "/apps/waveplume" },
  openGraph: { images: ["/apps/waveplume/hero-wave.webp"] },
  twitter: { card: "summary_large_image", images: ["/apps/waveplume/hero-wave.webp"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WavePlume",
  applicationCategory: "BusinessApplication",
  operatingSystem: "macOS, Windows 10, Windows 11",
  description: "Private local meeting recording and transcription with Whisper.",
  offers: { "@type": "Offer", price: "14.99", priceCurrency: "USD" },
  url: "https://shrpware.com/apps/waveplume",
  image: "https://shrpware.com/apps/waveplume/hero-wave.webp",
};

const features = [
  ["Bot-free recording", "Capture system audio and your microphone without inviting an assistant into the meeting."],
  ["Local Whisper transcription", "Turn recordings into searchable text on your computer instead of uploading audio for processing."],
  ["Searchable session library", "Organize recordings, transcripts, and notes, then search them when you need to find part of a meeting."],
  ["Files you control", "Choose where sessions are stored and access the files outside WavePlume."],
  ["One-time purchase", "$14.99 on the Mac App Store or Microsoft Store. No recurring subscription."],
  ["Optional schedule connection", "Connect Webex calendar schedule information when useful; meeting content still stays local."],
];

const screenshots = [
  { src: "/apps/waveplume/gallery/windows-record-private.webp", alt: "WavePlume Windows recording controls", caption: "Record a meeting" },
  { src: "/apps/waveplume/gallery/windows-searchable-transcripts.webp", alt: "Searchable transcript in WavePlume for Windows", caption: "Search transcripts" },
  { src: "/apps/waveplume/gallery/windows-your-folders.webp", alt: "WavePlume session folders on Windows", caption: "Choose a folder" },
];

export default function WavePlumePage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero wrap">
        <div className="product-hero-copy">
          <p className="eyebrow"><span />Meeting recorder + transcriber</p>
          <div className="app-title-lockup">
            <img src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="" />
            <h1>WavePlume</h1>
          </div>
          <h2>Record and transcribe meetings locally.</h2>
          <p>WavePlume records system audio and your microphone, then transcribes with Whisper on your computer. It does not add a bot to the meeting or upload audio for transcription.</p>
          <div className="hero-actions">
            {releaseStatus.waveplumeTrialReady ? <Link className="button button-primary" href={links.waveplume.trial}>Try 14 days on Windows <span>↓</span></Link> : <span className="button button-disabled">New Windows trial coming</span>}
            <Link className="button button-secondary" href={links.waveplume.mac}>Buy for Mac · $14.99</Link>
            <Link className="text-link" href={links.waveplume.windows}>Microsoft Store →</Link>
          </div>
          <p className="fine-print">Windows 10/11 · macOS · Digitally signed Windows installer · One-time purchase · No account required</p>
        </div>
        <img className="product-hero-image" src="/apps/waveplume/hero-wave.webp" alt="WavePlume showing a meeting recording with a local transcript" />
      </section>

      <section className="trust-band"><div className="wrap"><span>Audio stays local</span><span>No meeting bot</span><span>No subscription</span><span>No account</span></div></section>

      <section className="content-section wrap">
        <div className="section-heading"><p className="section-number">01 / FEATURES</p><h2>What WavePlume does.</h2></div>
        <div className="feature-card-grid">
          {features.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="workflow-section wrap">
        <div className="section-heading"><p className="section-number">02 / WORKFLOW</p><h2>How it works.</h2></div>
        <ol className="workflow-list">
          <li><span>01</span><div><h3>Choose your audio</h3><p>Select system audio, microphone, or both. Verify the levels before the meeting starts.</p></div></li>
          <li><span>02</span><div><h3>Record without a bot</h3><p>WavePlume captures locally, so it does not need to enter the meeting as another participant.</p></div></li>
          <li><span>03</span><div><h3>Transcribe on-device</h3><p>Run Whisper locally and keep the resulting transcript beside the recording.</p></div></li>
        </ol>
      </section>

      <section className="gallery-section wrap">
        <div className="section-heading"><p className="section-number">03 / WINDOWS</p><h2>WavePlume for Windows.</h2></div>
        <ScreenshotGallery items={screenshots} label="WavePlume for Windows" />
      </section>

      <section className="comparison-section wrap">
        <div className="section-heading"><p className="section-number">04 / COMPARISON</p><h2>How WavePlume compares with cloud meeting bots.</h2></div>
        <div className="comparison-table" role="table" aria-label="WavePlume and cloud meeting bot comparison">
          <div className="comparison-row comparison-head" role="row"><span>Capability</span><strong>WavePlume</strong><span>Typical cloud bot</span></div>
          <div className="comparison-row" role="row"><span>Joins the call</span><strong>No</strong><span>Usually</span></div>
          <div className="comparison-row" role="row"><span>Audio processing</span><strong>On your device</strong><span>Remote servers</span></div>
          <div className="comparison-row" role="row"><span>Account required</span><strong>No</strong><span>Usually</span></div>
          <div className="comparison-row" role="row"><span>Pricing</span><strong>$14.99 once</strong><span>Often recurring</span></div>
        </div>
        <Link className="text-link" href="/compare/waveplume-vs-cloud-meeting-bots">Read the full comparison →</Link>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading"><p className="section-number">05 / QUESTIONS</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list">
          <details><summary>Does WavePlume upload my meeting audio?</summary><p>No. Recording and transcription happen locally. The app may use the network to download a selected Whisper model from the Hugging Face-hosted Argmax repository.</p></details>
          <details><summary>Is the trial really 14 days?</summary><p>Yes. The Windows trial gives you 14 days to test the workflow before buying through the Microsoft Store.</p></details>
          <details><summary>Can I record any meeting?</summary><p>WavePlume can capture system and microphone audio. You are responsible for following the recording and consent laws that apply to you and the people in the meeting.</p></details>
          <details><summary>Where can I get help?</summary><p>Visit <Link href="/apps/waveplume/support">WavePlume support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap"><p className="section-number">14 DAYS · WINDOWS</p><h2>Try WavePlume free for 14 days on Windows.</h2><div className="hero-actions">{releaseStatus.waveplumeTrialReady ? <Link className="button button-primary" href={links.waveplume.trial}>Download the trial</Link> : <span className="button button-disabled">New trial installer in progress</span>}<Link className="button button-secondary" href={links.waveplume.mac}>Buy for Mac</Link></div></section>
    </PageShell>
  );
}
