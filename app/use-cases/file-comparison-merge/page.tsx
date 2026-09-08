import type { Metadata } from "next";
import { SeoLanding } from "@/app/components/SeoLanding";

export const metadata: Metadata = { title: "Compare and merge text or Python files clearly", description: "Review text or Python files side by side with inline changes, filters, hunk controls, unified diff export, and three-way merge in DeltaTxt.", alternates: { canonical: "/use-cases/file-comparison-merge" } };

export default function FileComparison() {
  return <SeoLanding title="Compare and merge text with confidence." intro="Review Python, configuration, logs, or other text side by side, isolate the meaningful differences, and keep only the changes you intend." app="DeltaTxt" appHref="/apps/deltatxt" cta="See DeltaTxt" image="/apps/deltatxt/gallery/windows-compare-clearly.webp" imageAlt="Two Python files compared side by side in DeltaTxt">
    <h2>See the change at two levels</h2><p>DeltaTxt aligns changed lines side by side and highlights the modified tokens within them. Move between change blocks with synchronized scrolling, or switch to a changes-only view with enough context to stay oriented.</p>
    <h2>Filter the noise</h2><div className="prose-grid"><section><h3>Whitespace and case</h3><p>Ignore whitespace or letter case when formatting differences would otherwise hide the change that matters.</p></section><section><h3>Apply one change</h3><p>Copy a change for review notes, or apply the current block left or right after a confirmation.</p></section><section><h3>Export a standard diff</h3><p>Copy a unified diff for a ticket, review, patch discussion, or record of what changed.</p></section></div>
    <h2>Merge without sacrificing the sources</h2><p>A three-way merge creates an editable draft instead of overwriting an input file. Unresolved conflict blocks stay visible and can be resolved with the left side, right side, or both before the result is saved.</p>
    <h2>Common comparison jobs</h2><ul><li>Review a Python script before running or distributing the revision.</li><li>Compare an expected configuration with the version found on a computer.</li><li>Place successful and failed diagnostic output side by side.</li><li>Check two folders and preview selected sync changes with backups.</li></ul>
  </SeoLanding>;
}
