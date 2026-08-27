import type { Metadata } from "next";
import { SeoLanding } from "@/app/components/SeoLanding";

export const metadata: Metadata = {
  title: "Find and replace text across files on Windows",
  description: "Find and replace text in one file, across a workspace, or in a very large file with regex controls, previews, and backups in DeltaTxt.",
  alternates: { canonical: "/use-cases/find-replace-text-files" },
};

export default function FindReplaceTextFiles() {
  return <SeoLanding
    eyebrow="Use case / Find + replace"
    title="Find and replace across files with control."
    intro="Search one document, scan an entire workspace, or process a file too large to open normally—then review broader replacements before DeltaTxt changes anything."
    app="DeltaTxt"
    appHref="/apps/deltatxt"
    cta="See DeltaTxt"
    image="/apps/deltatxt/gallery/windows-search-workspace.webp"
    imageAlt="Search results across Python files in a DeltaTxt workspace"
  >
    <h2>Use the right search for the job</h2>
    <div className="prose-grid">
      <section><h3>Inside a document</h3><p>Find or replace plain text and regular expressions with case, whole-word, wraparound, match counting, and grouped undo controls.</p></section>
      <section><h3>Across a workspace</h3><p>Search related source, configuration, and log files together, then open an exact result at its file, line, and column.</p></section>
      <section><h3>Inside a very large file</h3><p>Use bounded-memory search and literal replacement without first loading the entire file into an editable tab.</p></section>
    </div>

    <h2>Preview broader replacements</h2>
    <p>Workspace replacement builds a plan before it writes. DeltaTxt rechecks the affected files, lets you review the scope, and creates a timestamped backup tree so an unexpected change is recoverable.</p>

    <h2>Keep matching behavior consistent</h2>
    <p>Case sensitivity, whole-word matching, regular expressions, and extended escape syntax behave consistently across document and workspace tools. That makes a search easier to refine before it becomes a replacement.</p>

    <h2>Useful for code, configs, and logs</h2>
    <ul><li>Rename a key across related configuration files.</li><li>Update a repeated Python pattern after reviewing every match.</li><li>Redact or normalize a large exported log with an optional backup.</li><li>Find an identifier across source, output, and supporting text.</li></ul>
  </SeoLanding>;
}
