import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { ArticleHero, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "WavePlume vs. cloud meeting bots", description: "Compare local, bot-free WavePlume transcription with common cloud meeting assistants across privacy, workflow, storage, and price.", alternates: { canonical: "/compare/waveplume-vs-cloud-meeting-bots" } };

export default function WaveComparison() {
  return <PageShell><ArticleHero eyebrow="Comparison / Meetings" title="WavePlume vs. cloud meeting bots." intro="Both create searchable meeting transcripts. The main differences are whether a bot joins the call and where the audio is processed and stored." />
    <article className="article-body wrap">
      <div className="comparison-table comparison-table-wide" role="table"><div className="comparison-row comparison-head"><span>Question</span><strong>WavePlume</strong><span>Typical cloud bot</span></div><div className="comparison-row"><span>How does it record?</span><strong>From your computer</strong><span>Joins as a meeting participant</span></div><div className="comparison-row"><span>Where is transcription processed?</span><strong>On your device</strong><span>Provider infrastructure</span></div><div className="comparison-row"><span>Where are files stored?</span><strong>Your selected folders</strong><span>Provider account/cloud</span></div><div className="comparison-row"><span>Is an account required?</span><strong>No</strong><span>Usually</span></div><div className="comparison-row"><span>What does it cost?</span><strong>$14.99 once</strong><span>Often a recurring plan</span></div></div>
      <h2>Choose WavePlume when…</h2><ul><li>You want no extra participant in the call.</li><li>You prefer audio and transcripts to remain on your computer.</li><li>You do not need cloud collaboration or automatic sharing.</li><li>You would rather pay once than maintain another subscription.</li></ul>
      <h2>Choose a cloud assistant when…</h2><ul><li>Your team specifically needs shared, web-hosted transcript workspaces.</li><li>Centralized administration and automatic distribution matter more than keeping files on your computer.</li><li>Your organization has reviewed and approved the provider’s data handling.</li></ul>
      <p className="callout">No recorder changes your legal responsibilities. Provide notice and obtain consent whenever the applicable law, workplace, or meeting policy requires it.</p>
      <Link className="button button-primary" href="/apps/waveplume">Try WavePlume for 14 days</Link>
    </article>
  </PageShell>;
}
