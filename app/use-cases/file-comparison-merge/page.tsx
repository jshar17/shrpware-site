import type { Metadata } from "next";
import { SeoLanding } from "@/app/components/SeoLanding";

export const metadata: Metadata = { title: "Compare and merge text files clearly", description: "Review two text files side by side, understand the differences, and merge the right changes in a focused Windows workbench.", alternates: { canonical: "/use-cases/file-comparison-merge" } };

export default function FileComparison() {
  return <SeoLanding eyebrow="Use case / Diff + merge" title="Compare and merge text files." intro="Review two text files side by side, see what changed, and merge the lines you want to keep." app="DeltaTxt" appHref="/apps/deltatxt" cta="Download DeltaTxt free" image="/apps/deltatxt/gallery/windows-compare-clearly.webp" imageAlt="Two text files compared side by side in DeltaTxt">
    <h2>How file comparison works</h2><p>Choose the two files, review each changed section, and apply the changes you want to keep. DeltaTxt keeps the comparison visible without requiring you to open a full development environment.</p>
    <h2>Common uses</h2><div className="prose-grid"><section><h3>Configuration files</h3><p>Compare an expected configuration with the version found on a computer or in an export.</p></section><section><h3>Script revisions</h3><p>Review what changed between two copies before running or distributing the new version.</p></section><section><h3>Diagnostic output</h3><p>Place a successful run beside a failed one and review the meaningful differences.</p></section></div>
    <h2>Before a large merge</h2><ul><li>Save or copy both original files.</li><li>Confirm which side is the source and which is the destination.</li><li>Review the final result once more before replacing a production file.</li></ul>
  </SeoLanding>;
}
