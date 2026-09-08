import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = { title: "DeltaTxt changelog", description: "Current DeltaTxt release and download information.", alternates: { canonical: "/apps/deltatxt/changelog" } };

export default function DeltaTxtChangelog() {
  return <PageShell accent="deltatxt"><ArticleHero eyebrow="DeltaTxt / Changelog" title="DeltaTxt release notes." intro="Current version, download, and release information." />
    <article className="article-body wrap"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp><div className="release-entry"><div><span>Current</span><time>2026</time></div><section><h2>DeltaTxt 0.3.2</h2><p>DeltaTxt is available for Mac from the App Store and for Windows from the Microsoft Store or as a digitally signed and timestamped standalone installer.</p><ul><li>A native Mac edition built in Swift with AppKit for focused text and code editing.</li><li>Focused Python editing, interpreter discovery, Run, and breakpoint debugging in the Windows edition.</li><li>Find and replace in a document, across a workspace, or through bounded-memory large-file tools.</li><li>Side-by-side comparison, inline changes, review filters, hunk application, unified diff export, and three-way merge.</li><li>Local preferences and recovery with no account, telemetry, advertising, or automatic crash upload.</li></ul><div className="inline-actions">{releaseStatus.deltaMacStoreReady ? <Link className="button button-primary" href={links.deltatxt.macStore}>Mac App Store</Link> : null}<Link className="button button-secondary" href={links.deltatxt.download}>Windows installer</Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Microsoft Store</Link> : null}</div><p className="fine-print">Windows standalone installer size: approximately 70 MB.</p><p className="checksum"><strong>SHA-256</strong><code>175D287AB861AACB436CB31EAD9ADCC7F90F5D1C25CD7CA4AAA83B1F242DA1F0</code></p></section></div></article>
  </PageShell>;
}
