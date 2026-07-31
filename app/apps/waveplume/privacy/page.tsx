import type { Metadata } from "next";
import { Brand } from "../../../Brand";

export const metadata: Metadata = { title: "WavePlume™ Privacy Policy | ShrpWare", description: "Privacy policy for WavePlume." };

export default function WavePlumePrivacy() {
  return (
    <main className="legal-page wave-legal">
      <header className="legal-header"><Brand /><nav><a href="/apps/waveplume">WavePlume</a><a href="/apps/waveplume/support">Support</a></nav></header>
      <article className="legal-content">
        <p className="product-overline">WAVEPLUME<sup className="trademark">™</sup> / PRIVACY</p><h1>Privacy policy</h1><p className="effective-date">Effective July 25, 2026</p>
        <p className="legal-lede">WavePlume is designed to keep meeting content on your computer. We do not operate an account, analytics, advertising, or cloud-storage service for the app.</p>
        <h2>Information stored locally</h2><p>At your direction, WavePlume may store captured video, internal audio, microphone audio, transcripts, subtitle files, session details, app preferences, and access information for the recording library you select.</p>
        <h2>Local transcription and model downloads</h2><p>Transcription runs on your computer. When you first use a transcription quality level, WavePlume may download the required model files from a Hugging Face-hosted Argmax repository. Meeting audio, video, and transcripts are not uploaded with that request.</p>
        <h2>Permissions</h2><ul><li><strong>Screen and system audio:</strong> to capture the source you select.</li><li><strong>Microphone:</strong> only when you include a selected input.</li><li><strong>Files and folders:</strong> to use a recording library and import or export media.</li><li><strong>Calendar:</strong> only when you enable calendar-based meeting detection.</li><li><strong>Network:</strong> to download local transcription model files.</li></ul>
        <h2>Collection and sharing</h2><p>WavePlume does not collect, sell, rent, or share meeting content or personal information through the app. The current app contains no advertising or analytics SDK.</p>
        <h2>Recording responsibility</h2><p>You are responsible for telling participants when recording is active and obtaining any consent required by law, workplace policy, contract, or the meeting service.</p>
        <h2>Changes and contact</h2><p>Material changes will be reflected on this page. Privacy questions may be sent to <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p>
      </article>
      <footer className="product-footer"><a href="/apps/waveplume">← WavePlume</a><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
