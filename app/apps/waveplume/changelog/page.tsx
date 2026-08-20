import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "WavePlume changelog", description: "Current WavePlume release and download information.", alternates: { canonical: "/apps/waveplume/changelog" } };

export default function WavePlumeChangelog() {
  return <PageShell><ArticleHero eyebrow="WavePlume / Changelog" title="WavePlume release notes." intro="Current version, download, and release information." />
    <article className="article-body wrap"><BackToApp href="/apps/waveplume">Back to WavePlume</BackToApp><div className="release-entry"><div><span>Current</span><time>2026</time></div><section><h2>WavePlume 1.2.5</h2><p>The current store release for macOS and Windows. A digitally signed and timestamped standalone Windows installer is available as a 14-day trial.</p><p className="fine-print">Trial download size: approximately 92 MB.</p><p className="checksum"><strong>SHA-256</strong><code>E16834C2EF89AFED237AA1DD46E7C1F709346B9FC5E684D1332A9EB00B6ED7FC</code></p></section></div></article>
  </PageShell>;
}
