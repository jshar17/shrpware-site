import type { Metadata } from "next";
import { Brand } from "../../../Brand";

const MICROSOFT_STORE_URL = "https://apps.microsoft.com/detail/9p6h8n3vjxbx?hl=en-US&gl=US";

export const metadata: Metadata = {
  title: "WavePlume™ Support for Windows and Mac | ShrpWare",
  description: "Help with WavePlume recording, local transcription, permissions, files, and installation.",
  alternates: { canonical: "/apps/waveplume/support" },
};

export default function WavePlumeSupport() {
  return (
    <main className="legal-page wave-legal">
      <header className="legal-header"><Brand /><nav><a href="/apps/waveplume">WavePlume</a><a href="/apps/waveplume/privacy">Privacy</a><a href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Microsoft Store ↗</a></nav></header>
      <article className="legal-content">
        <p className="product-overline">WAVEPLUME<sup className="trademark">™</sup> / SUPPORT</p><h1>How can we help?</h1>
        <p className="legal-lede">WavePlume records meetings and transcribes them locally on Windows and Mac. For a question, bug report, or request, email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p>
        <h2>Before you write in</h2>
        <h3>No screens or windows listed?</h3><p>On Windows, choose Refresh in Record Setup and confirm the app is not minimized. On macOS, grant Screen &amp; System Audio Recording permission in System Settings › Privacy &amp; Security, then quit and reopen WavePlume.</p>
        <h3>Recording is silent?</h3><p>Internal meeting audio captures what your computer plays. Check the selected source and output device in the live monitor before recording.</p>
        <h3>Where are my recordings?</h3><p>The recording setup shows the active library. Choose another folder from Settings or the File menu; external drives are supported.</p>
        <h3>Transcript looks wrong?</h3><p>Transcripts come from a Whisper speech model running locally. Try a higher transcription quality, correct the text in WavePlume, and check the recording before relying on a transcript.</p>
        <h3>Transcription will not start?</h3><p>The first use of a quality level downloads its Whisper model. Connect once or download the model ahead of time in Settings; transcription works offline after the model is present.</p>
        <h2>Install the Windows app</h2><p>WavePlume is available free from the <a href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Microsoft Store</a>. Store installation keeps updates and Windows app identity in one place.</p>
        <h2>Recording responsibility</h2><p>Recording laws vary. Tell participants when recording is active and obtain any consent required by law, workplace policy, contract, or the meeting service.</p>
        <h2>Your data</h2><p>Recordings, transcripts, and meeting names stay on your computer. There is no WavePlume account or cloud storage service. Read the <a href="/apps/waveplume/privacy">privacy policy</a> for details.</p>
      </article>
      <footer className="product-footer"><a href="/apps/waveplume">← WavePlume</a><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
