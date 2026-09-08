import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "DeltaTxt support", description: "Installation and troubleshooting help for DeltaTxt editing, find and replace, text comparison, and large files on Mac and Windows.", alternates: { canonical: "/apps/deltatxt/support" } };

export default function DeltaTxtSupport() {
  return <PageShell accent="deltatxt"><ArticleHero title="DeltaTxt support." intro="Help with editing, find and replace, text comparison, installation, and recovery on Mac and Windows." />
    <article className="article-body wrap"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp><h2>Fast checks</h2><div className="faq-list">
      <details open><summary>Does the Mac App Store edition run or debug Python?</summary><p>No. The Mac App Store edition focuses on editing and text tools because App Sandbox restrictions make external script execution unreliable. Python run and debug remain available in the Windows edition.</p></details>
      <details><summary>Python will not run or debug on Windows</summary><p>Confirm the selected interpreter exists and runs from Windows outside DeltaTxt. Refresh interpreter discovery, then check the saved arguments, working directory, and environment values for the script.</p></details>
      <details><summary>A breakpoint is not being reached</summary><p>Save the script, confirm you started Debug rather than Run, and verify the breakpoint is set on an executable line in the active file. The current execution line appears when Python pauses.</p></details>
      <details><summary>Find or replace misses a match</summary><p>Check case sensitivity, whole-word mode, regular-expression mode, and the selected workspace root. For workspace replacement, review the preview to confirm which files and matches are included.</p></details>
      <details><summary>A compare or merge result looks wrong</summary><p>Verify which file is on each side before applying changes. Save a copy of important files before a large merge.</p></details>
      <details><summary>A large file is slow to open</summary><p>Keep the file on a local drive when possible. For a file too large to edit comfortably, use Find in Large File or Streaming Replace so DeltaTxt can process it without loading the entire file into a normal tab.</p></details>
      <details><summary>Where are recovery snapshots?</summary><p>Recovery data is stored locally. Reopen DeltaTxt after an unexpected exit and use the available recovery prompt before replacing the affected file.</p></details>
      <details><summary>Does DeltaTxt send crash or usage data?</summary><p>No. There is no telemetry, analytics, advertising, or automatic crash submission.</p></details>
    </div><h2>Still stuck?</h2><p>Email <a href="mailto:support@shrpware.com">support@shrpware.com</a> with your macOS or Windows version, DeltaTxt version, and steps to reproduce the problem. Remove confidential text before sharing a sample.</p></article>
  </PageShell>;
}
