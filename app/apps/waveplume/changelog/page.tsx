import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "WavePlume changelog", description: "WavePlume release notes: 1.5.0 for Mac writes meeting summaries on your Mac by default. Windows 1.2.5 trial download and checksum.", alternates: { canonical: "/apps/waveplume/changelog" } };

export default function WavePlumeChangelog() {
  return <PageShell accent="waveplume"><ArticleHero title="WavePlume release notes." intro="Current version, download, and release information." />
    <article className="article-body wrap"><BackToApp href="/apps/waveplume">Back to WavePlume</BackToApp>
      <div className="release-entry"><section><h2>WavePlume 1.5.0 for Mac</h2><p>The current Mac App Store release. The Windows edition is versioned separately; its current release is 1.2.5, below.</p>
        <h3>Highlights</h3>
        <ul>
          <li>Summaries are written on your Mac by default. WavePlume’s internal model downloads once from Hugging Face, sized to what your Mac can run (3 to 7 GB), then writes each summary offline: what was discussed and decided, who is doing what, and what is still open.</li>
          <li>You can also choose who writes a summary: Apple Intelligence (macOS 26), also on your Mac; Gemini or Groq, with a free key from your own account, and the app asks before a transcript leaves your Mac; or Microsoft 365 Copilot, Claude or ChatGPT as a hand-off, where the app copies the request and opens the one you chose.</li>
          <li>The default source is Automatic: when the recording starts, WavePlume finds the live Teams, Zoom or Webex call by checking which app is playing sound, follows the call if it moves to another screen, and keeps the picture to the call instead of the whole display.</li>
          <li>Record Setup is four rows: Record, Your voice, Quality (Audio only, Standard or High) and Start by itself. The Live Source Monitor shows the picture and sound those choices will record.</li>
          <li>Nothing starts or stops behind your back. Starting on its own, the app counts down first; breaks are announced before a quiet stretch pauses the recording; and an optional countdown when the meeting ends offers Stop now or Keep recording.</li>
          <li>Transcription runs alongside recording, with a percentage and time left, and meetings can be queued. Recordings of twenty minutes or more transcribe nearly twice as fast at the Fast and Balanced settings.</li>
          <li>Transcripts can be searched and corrected in place, and clicking a timestamp plays that moment. Save a transcript or summary as Word, PDF, RTF, Markdown, web page, plain text or subtitles, or start an email from Mail or Outlook and send it yourself.</li>
        </ul>
        <p className="fine-print">Requires macOS 15 or later.</p></section></div>
      <div className="release-entry"><section><h2>WavePlume 1.2.5 for Windows</h2><p>The current Windows release, from the Microsoft Store. A digitally signed and timestamped standalone Windows installer is available as a 14-day trial.</p><p className="fine-print">Trial download size: approximately 92 MB.</p><p className="checksum"><strong>SHA-256</strong><code>E16834C2EF89AFED237AA1DD46E7C1F709346B9FC5E684D1332A9EB00B6ED7FC</code></p></section></div>
    </article>
  </PageShell>;
}
