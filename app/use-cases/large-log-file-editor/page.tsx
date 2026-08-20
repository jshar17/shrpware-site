import type { Metadata } from "next";
import { SeoLanding } from "@/app/components/SeoLanding";

export const metadata: Metadata = { title: "Edit large log files on Windows", description: "Open large logs, search related files, compare versions, and automate cleanup without loading a full IDE.", alternates: { canonical: "/use-cases/large-log-file-editor" } };

export default function LargeLogs() {
  return <SeoLanding eyebrow="Use case / Logs" title="Edit large log files on Windows." intro="Use DeltaTxt to open large logs, find error messages across related files, compare output, and run cleanup scripts." app="DeltaTxt" appHref="/apps/deltatxt" cta="Download DeltaTxt free" image="/apps/deltatxt/gallery/windows-code-without-overhead.webp" imageAlt="A technical log open in DeltaTxt">
    <h2>Find the relevant error</h2><p>Open the log, search for an error code or distinctive phrase, and review the events immediately before and after it. DeltaTxt keeps these tools in one window without the project and build features of a full IDE.</p>
    <h2>Search related files</h2><div className="prose-grid"><section><h3>Workspace search</h3><p>Look for the same identifier across logs, configuration files, scripts, and exported text in a folder.</p></section><section><h3>Compare two runs</h3><p>Place a failed result beside a successful one and review the lines that changed.</p></section><section><h3>Automate cleanup</h3><p>Use your own Python tools for repeatable redaction, extraction, normalization, or filtering.</p></section></div>
    <h2>Good large-log habits</h2><ul><li>Work on a copy when the source is still being written.</li><li>Keep confidential values out of examples shared for support.</li><li>Save repeatable parsing steps as scripts instead of relying on manual edits.</li></ul>
  </SeoLanding>;
}
