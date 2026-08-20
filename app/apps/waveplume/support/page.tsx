import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "WavePlume support", description: "Setup and troubleshooting help for WavePlume on macOS and Windows.", alternates: { canonical: "/apps/waveplume/support" } };

export default function WavePlumeSupport() {
  return <PageShell>
    <ArticleHero eyebrow="WavePlume / Support" title="WavePlume support." intro="Help with audio, transcripts, model downloads, storage, and licensing." />
    <article className="article-body wrap">
      <BackToApp href="/apps/waveplume">Back to WavePlume</BackToApp>
      <h2>Fast checks</h2>
      <div className="faq-list">
        <details open><summary>No screens or windows appear</summary><p>WavePlume records audio, not video. It does not capture your screen or meeting windows.</p></details>
        <details><summary>The recording is silent</summary><p>Open the recording setup and confirm the intended system-audio and microphone sources. Check the level meters before starting, then verify that WavePlume has the required audio permissions.</p></details>
        <details><summary>I cannot find an earlier recording</summary><p>Open the session library and search by title, date, or transcript text. Check the storage folder selected in Settings if files were moved outside the app.</p></details>
        <details><summary>The transcript is inaccurate</summary><p>Clearer source audio helps most. Try a larger Whisper model if your computer has enough resources, and confirm the spoken language before transcribing again.</p></details>
        <details><summary>A model will not download</summary><p>Confirm the computer is online and that a firewall is not blocking the Hugging Face-hosted Argmax model repository. Meeting audio is not uploaded during the download.</p></details>
        <details><summary>How does the license work?</summary><p>WavePlume is $14.99 as a one-time purchase from the Mac App Store or Microsoft Store. The standalone Windows installer includes a 14-day trial.</p></details>
        <details><summary>Who is responsible for recording consent?</summary><p>You are. Recording laws and workplace policies vary. Make sure everyone receives any notice or consent required in your situation.</p></details>
      </div>
      <h2>Still stuck?</h2>
      <p>Email <a href="mailto:support@shrpware.com">support@shrpware.com</a> with your operating system, WavePlume version, and what happened. Do not attach private recordings unless requested and safe to share.</p>
    </article>
  </PageShell>;
}
