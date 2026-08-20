import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "WavePlume privacy policy", description: "How WavePlume handles recordings, transcripts, permissions, model downloads, and optional calendar access.", alternates: { canonical: "/apps/waveplume/privacy" } };

export default function WavePlumePrivacy() {
  return <PageShell>
    <ArticleHero eyebrow="WavePlume / Privacy" title="How WavePlume handles your data." intro="Effective August 12, 2026. This policy explains how WavePlume uses files, permissions, and network access." />
    <article className="article-body wrap policy-copy">
      <BackToApp href="/apps/waveplume">Back to WavePlume</BackToApp>
      <h2>Local content</h2><p>WavePlume records audio and creates transcripts on your device. It does not require an account and does not provide cloud storage for your meeting content.</p>
      <h2>No analytics or advertising</h2><p>The app does not include product analytics, behavioral advertising, or automatic upload of recordings, transcripts, or crash reports.</p>
      <h2>Model downloads</h2><p>When you choose a Whisper model, WavePlume may connect to the Hugging Face-hosted Argmax repository to download model files. This network request downloads software data; it does not upload your meeting audio or transcript.</p>
      <h2>Optional Webex schedule connection</h2><p>If you choose to connect Webex calendar schedule information, WavePlume uses that connection to show relevant meeting schedule details. The feature is optional and does not change where recording or transcription happens.</p>
      <h2>Permissions</h2><p>Depending on your operating system and the features you use, WavePlume may request access to screen/system audio capture, microphone input, files and folders, calendar schedule information, and the network for model downloads.</p>
      <h2>Collection and sharing</h2><p>ShrpWare does not collect, sell, or share your recordings, transcripts, or app usage through WavePlume. Files you place in a third-party synced folder are subject to that provider’s terms.</p>
      <h2>Your responsibility when recording</h2><p>You are responsible for complying with applicable recording-consent laws, workplace rules, and meeting policies.</p>
      <h2>Questions and changes</h2><p>Questions can be sent to <a href="mailto:support@shrpware.com">support@shrpware.com</a>. Material policy changes will be posted on this page with a new effective date.</p>
    </article>
  </PageShell>;
}
