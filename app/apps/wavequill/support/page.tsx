import type { Metadata } from "next";

export const metadata: Metadata = { title: "WaveQuill Support | ShrpWare", description: "Support information for WaveQuill." };

export default function WaveQuillSupport() {
  return (
    <main className="legal-page wave-legal">
      <header className="legal-header"><a className="brand" href="/"><span>SHRP</span><span className="brand-mark">#</span></a><nav><a href="/apps/wavequill">WaveQuill</a><a href="/apps/wavequill/privacy">Privacy</a></nav></header>
      <article className="legal-content">
        <p className="product-overline">WAVEQUILL / SUPPORT</p><h1>How can we help?</h1>
        <p className="legal-lede">WaveQuill records meetings and transcribes them locally. For a question, bug report, or request, email <a href="mailto:wavequillsupport@gmail.com">wavequillsupport@gmail.com</a>.</p>
        <h2>Before you write in</h2>
        <h3>No screens or windows listed?</h3><p>On macOS, grant Screen &amp; System Audio Recording permission in System Settings › Privacy &amp; Security, then quit and reopen WaveQuill.</p>
        <h3>Recording is silent?</h3><p>Internal meeting audio captures what your computer plays. Check the selected source and output device in the live monitor before recording.</p>
        <h3>Where are my recordings?</h3><p>The recording setup shows the active library. You can choose a different recording library from the app’s File menu.</p>
        <h3>Transcript looks wrong?</h3><p>Transcripts come from a speech model running locally. It can make mistakes, especially during silence. Check the recording before relying on a transcript.</p>
        <h2>Recording responsibility</h2><p>Recording laws vary. Tell participants when recording is active and obtain any consent required by law, workplace policy, contract, or the meeting service.</p>
        <h2>Your data</h2><p>Recordings, transcripts, and meeting names stay on your computer. There is no WaveQuill account or cloud storage service. Read the <a href="/apps/wavequill/privacy">privacy policy</a> for details.</p>
      </article>
      <footer className="product-footer"><a href="/apps/wavequill">← WaveQuill</a><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
