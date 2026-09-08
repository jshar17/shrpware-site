import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "WavePlume — Private local meeting transcription",
  description: "Record system audio and your microphone, then transcribe meetings locally with Whisper. No bot, cloud upload, account, or subscription.",
  alternates: { canonical: "/apps/waveplume" },
  openGraph: { images: ["/apps/waveplume/hero-windows-transcript-20260907.webp"] },
  twitter: { card: "summary_large_image", images: ["/apps/waveplume/hero-windows-transcript-20260907.webp"] },
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
  image: "https://shrpware.com/apps/waveplume/hero-windows-transcript-20260907.webp",
};

const features = [
  ["Bot-free recording", "Capture system audio and your microphone without inviting an assistant into the meeting."],
  ["Local Whisper transcription", "Turn recordings into searchable text on your computer instead of uploading audio for processing."],
  ["A library for your meetings", "Keep recordings and transcripts together, browse past sessions, and search meeting names in the Windows library."],
  ["Find the part you need", "Search transcript text and use timestamps to return to the corresponding moment in a recording."],
  ["Correct and export", "Edit a transcript on Windows, save your corrections, and keep text and subtitle files alongside the original media."],
  ["Bring existing recordings", "Import an audio or video file on Windows and transcribe it locally with the same Whisper workflow."],
];

const capabilities = [
  ["Capture", "Choose sound, picture, or both", "Record computer audio and your microphone, with optional screen or window capture. Use audio only when you just need the conversation."],
  ["Presets", "Set up a Windows recording quickly", "Choose Quick Note, Standard Meeting, or Archival Quality, then adjust the sources and quality for the meeting."],
  ["Preview", "Check before you record", "Use the Windows live preview and audio meters to check the selected source before starting a recording."],
  ["Breaks", "Handle pauses in longer meetings", "Windows break-pause controls split a long session into parts while keeping its recordings and transcript associated with the meeting."],
  ["Whisper", "Choose speed or accuracy", "Select a local transcription quality tier on Windows. Larger models take more time and memory; each model downloads on first use."],
  ["Files", "Keep a folder you can open", "Choose your Windows recording library location, open session folders in Explorer, and keep your files accessible outside the app."],
];

const screenshots = [
  { src: "/apps/waveplume/gallery/windows-transcript-20260907.webp", alt: "WavePlume for Windows displaying a fictional product planning transcript with clickable timestamps, search, and edit controls", caption: "Find the words you need", width: 1920, height: 1080, thumbnail: "/apps/waveplume/gallery/windows-transcript-20260907-thumb.webp" },
  { src: "/apps/waveplume/gallery/windows-record-20260907.webp", alt: "WavePlume recording setup with Quick Note, Standard Meeting, and Archival Quality presets", caption: "Set up your next recording", width: 1920, height: 1080, thumbnail: "/apps/waveplume/gallery/windows-record-20260907-thumb.webp" },
  { src: "/apps/waveplume/gallery/windows-library-20260907.webp", alt: "WavePlume Windows session library containing five fictional meetings", caption: "Keep your meetings together", width: 1920, height: 1080, thumbnail: "/apps/waveplume/gallery/windows-library-20260907-thumb.webp" },
  { src: "/apps/waveplume/gallery/windows-edit-20260907.webp", alt: "WavePlume transcript editor with a fictional meeting transcript and Save and Cancel controls", caption: "Correct and save your transcript", width: 1920, height: 1080, thumbnail: "/apps/waveplume/gallery/windows-edit-20260907-thumb.webp" },
];

function StoreLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`store-link-group${compact ? " store-link-group-compact" : ""}`}>
      <div className="store-actions" aria-label="Get WavePlume">
        <Link className="store-button store-button-primary" href={links.waveplume.mac}><strong>Mac App Store</strong><i aria-hidden="true">↗</i></Link>
        <Link className="store-button" href={links.waveplume.windows}><strong>Microsoft Store</strong><i aria-hidden="true">↗</i></Link>
      </div>
      <p className="direct-download">{releaseStatus.waveplumeTrialReady ? <Link href={links.waveplume.trial}>Try 14 days on Windows <span aria-hidden="true">↓</span></Link> : "New Windows trial coming"}</p>
    </div>
  );
}

export default function WavePlumePage() {
  return (
    <PageShell accent="waveplume">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero product-hero-waveplume wrap">
        <div className="product-hero-copy">
          <p className="eyebrow"><span />Meeting recorder + transcriber</p>
          <div className="app-title-lockup">
            <img src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="" />
            <h1>WavePlume</h1>
          </div>
          <h2>Your meetings, recorded and transcribed on your computer.</h2>
          <p>Capture the conversation, turn it into searchable text with local Whisper, and keep the files in your own folders. No meeting bot, cloud upload, or subscription.</p>
          <StoreLinks />
          <p className="fine-print">macOS · Windows 10/11 · $14.99 one-time purchase · No account required</p>
        </div>
        <div className="product-hero-debugger product-hero-waveplume-screen"><figure><img src="/apps/waveplume/hero-windows-transcript-20260907.webp" alt="WavePlume on Windows showing a sample meeting transcript with timestamps and editing tools" width={1424} height={861} fetchPriority="high" /></figure></div>
      </section>

      <section className="trust-band"><div className="wrap"><span>Audio stays local</span><span>No meeting bot</span><span>No subscription</span><span>No account</span></div></section>

      <section className="content-section wrap">
        <div className="section-heading" data-arrival><p className="section-number">01 / CORE WORKFLOWS</p><h2>From conversation to words you can use.</h2></div>
        <div className="feature-card-grid" data-arrival>
          {features.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="content-section wrap">
        <div className="section-heading" data-arrival><p className="section-number">02 / FEATURES</p><h2>The controls behind a useful recording.</h2></div>
        <ol className="workflow-list" data-arrival>{capabilities.map(([tag, title, body]) => <li key={title}><span>{tag}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="gallery-section platform-gallery-section wrap">
        <div className="section-heading" data-arrival><p className="section-number">03 / IN THE APP</p><h2>See the Windows workflow.</h2></div>
        <div className="platform-gallery-group" data-arrival aria-labelledby="waveplume-windows-gallery">
          <div className="platform-gallery-heading"><div><p className="platform-kicker">Windows 10 / 11</p><h3 id="waveplume-windows-gallery">Record. Find. Revisit.</h3><p>The Windows interface, shown with fictional meeting content. Select a screenshot to explore it at full size.</p></div></div>
          <ScreenshotGallery items={screenshots} label="WavePlume for Windows" layout="featured" />
        </div>
      </section>

      <section className="comparison-section wrap">
        <div className="section-heading" data-arrival><p className="section-number">04 / COMPARISON</p><h2>How WavePlume compares with cloud meeting bots.</h2></div>
        <div className="comparison-table" data-arrival role="table" aria-label="WavePlume and cloud meeting bot comparison">
          <div className="comparison-row comparison-head" role="row"><span>Capability</span><strong>WavePlume</strong><span>Typical cloud bot</span></div>
          <div className="comparison-row" role="row"><span>Joins the call</span><strong>No</strong><span>Usually</span></div>
          <div className="comparison-row" role="row"><span>Audio processing</span><strong>On your device</strong><span>Remote servers</span></div>
          <div className="comparison-row" role="row"><span>Account required</span><strong>No</strong><span>Usually</span></div>
          <div className="comparison-row" role="row"><span>Pricing</span><strong>$14.99 once</strong><span>Often recurring</span></div>
        </div>
        <Link className="text-link" href="/compare/waveplume-vs-cloud-meeting-bots">Read the full comparison →</Link>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading" data-arrival><p className="section-number">05 / QUESTIONS</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list" data-arrival>
          <details><summary>Does WavePlume upload my meeting audio?</summary><p>No. Recording and transcription happen locally. An internet connection is needed to download a selected Whisper model before its first use. Optional connected features may also use the network.</p></details>
          <details><summary>Can I edit and reuse a transcript?</summary><p>Yes. On Windows, search the transcript, correct its text, and save your changes. Transcription produces text and SRT subtitle files; timestamp links can return you to the source recording when that media is present.</p></details>
          <details><summary>Are the Mac and Windows editions identical?</summary><p>Both provide local recording and Whisper transcription. The screenshots and detailed controls on this page show the Windows edition; platform interfaces and individual tools differ.</p></details>
          <details><summary>Is the trial really 14 days?</summary><p>Yes. The Windows trial gives you 14 days to test the workflow before buying through the Microsoft Store.</p></details>
          <details><summary>Can I record any meeting?</summary><p>WavePlume can capture system and microphone audio. You are responsible for following the recording and consent laws that apply to you and the people in the meeting.</p></details>
          <details><summary>Where can I get help?</summary><p>Visit <Link href="/apps/waveplume/support">WavePlume support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap" data-arrival><p className="section-number">MAC + WINDOWS · ONE-TIME PURCHASE</p><h2>Get WavePlume.</h2><StoreLinks compact /><div className="inline-actions closing-links"><Link className="text-link" href="/apps/waveplume/changelog">Release notes →</Link><Link className="text-link" href="/apps/waveplume/privacy">Privacy →</Link><Link className="text-link" href="/apps/waveplume/support">Support →</Link></div></section>
    </PageShell>
  );
}
