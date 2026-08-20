import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "DeltaTxt support", description: "Installation and troubleshooting help for DeltaTxt on Windows.", alternates: { canonical: "/apps/deltatxt/support" } };

export default function DeltaTxtSupport() {
  return <PageShell><ArticleHero eyebrow="DeltaTxt / Support" title="DeltaTxt support." intro="Help with installation, large files, workspace search, comparisons, scripts, and recovery." />
    <article className="article-body wrap"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp><h2>Fast checks</h2><div className="faq-list">
      <details open><summary>A large file is slow to open</summary><p>Allow the initial load to finish before starting a workspace-wide search. Close other memory-heavy tools, and keep the file on a local drive when possible.</p></details>
      <details><summary>Workspace search misses a file</summary><p>Confirm the correct root folder is open and that the file type is included in your search. Also check filters and case-sensitivity settings.</p></details>
      <details><summary>A compare or merge result looks wrong</summary><p>Verify which file is on each side before applying changes. Save a copy of important files before a large merge.</p></details>
      <details><summary>A Python or script workflow fails</summary><p>Confirm the selected interpreter exists and runs from Windows outside DeltaTxt. User scripts execute with your operating-system permissions and may depend on local packages.</p></details>
      <details><summary>Where are recovery snapshots?</summary><p>Recovery data is stored locally. Reopen DeltaTxt after an unexpected exit and use the available recovery prompt before replacing the affected file.</p></details>
      <details><summary>Does DeltaTxt send crash or usage data?</summary><p>No. There is no telemetry, analytics, advertising, or automatic crash submission.</p></details>
    </div><h2>Still stuck?</h2><p>Email <a href="mailto:support@shrpware.com">support@shrpware.com</a> with your Windows version, DeltaTxt version, and steps to reproduce the problem. Remove confidential text before sharing a sample.</p></article>
  </PageShell>;
}
