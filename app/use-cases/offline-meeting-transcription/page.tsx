import type { Metadata } from "next";
import { SeoLanding } from "@/app/components/SeoLanding";

export const metadata: Metadata = { title: "Offline meeting transcription without a bot", description: "Record and transcribe meetings locally with Whisper—without inviting a cloud bot or uploading meeting audio.", alternates: { canonical: "/use-cases/offline-meeting-transcription" } };

export default function OfflineTranscription() {
  return <SeoLanding eyebrow="Use case / Meetings" title="Offline meeting transcription without a bot." intro="WavePlume records and transcribes meetings on your computer without adding a bot to the call or uploading audio to a transcription service." app="WavePlume" appHref="/apps/waveplume" cta="Try WavePlume" image="/apps/waveplume/gallery/windows-searchable-transcripts.webp" imageAlt="A searchable local meeting transcript in WavePlume">
    <h2>How offline transcription works</h2><p>WavePlume records the audio available on your computer and runs Whisper locally. The recording and transcript remain in files on your device. A network connection is only needed for optional tasks such as downloading a transcription model or connecting schedule information.</p>
    <h2>Why use local transcription?</h2><div className="prose-grid"><section><h3>No bot joins the call</h3><p>Start recording from your computer without admitting another participant to the meeting.</p></section><section><h3>Audio stays on your computer</h3><p>Your audio is not sent to a remote transcription service. You choose where the session folder is stored.</p></section><section><h3>One-time price</h3><p>WavePlume costs $14.99 once instead of charging by seat, hour, or month.</p></section></div>
    <h2>A practical workflow</h2><ol><li>Confirm that recording is permitted and provide any required notice.</li><li>Select system audio, microphone, or both and check the input levels.</li><li>Record locally, then run the Whisper model that fits your speed and accuracy needs.</li><li>Search the saved transcript and keep the original recording only as long as needed.</li></ol>
  </SeoLanding>;
}
