import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "DeltaTxt changelog", description: "Current DeltaTxt release and download information.", alternates: { canonical: "/apps/deltatxt/changelog" } };

export default function DeltaTxtChangelog() {
  return <PageShell><ArticleHero eyebrow="DeltaTxt / Changelog" title="DeltaTxt release notes." intro="Current version, download, and release information." />
    <article className="article-body wrap"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp><div className="release-entry"><div><span>Current</span><time>2026</time></div><section><h2>DeltaTxt 0.3.1</h2><p>The current Windows x64 release is available from the Microsoft Store or as a digitally signed and timestamped standalone installer. It includes large-file editing, compare and merge, workspace search, and script workflows.</p><p className="fine-print">Standalone installer size: approximately 70 MB.</p><p className="checksum"><strong>SHA-256</strong><code>984477D66D40EB1ABEFEBC418079DF88ECFD504ECB55553185DE83B8AA5DE023</code></p></section></div></article>
  </PageShell>;
}
