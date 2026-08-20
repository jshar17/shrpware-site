import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { ArticleHero, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "DeltaTxt vs. full code editors", description: "Compare DeltaTxt with a full IDE for working with logs, file comparisons, workspace search, and scripts.", alternates: { canonical: "/compare/deltatxt-vs-heavyweight-editors" } };

export default function DeltaComparison() {
  return <PageShell><ArticleHero eyebrow="Comparison / Text tools" title="DeltaTxt vs. full code editors." intro="Full IDEs are designed for software projects. DeltaTxt focuses on large text files, comparison and merge, workspace search, and script-based text processing." />
    <article className="article-body wrap">
      <div className="comparison-table comparison-table-wide"><div className="comparison-row comparison-head"><span>Need</span><strong>DeltaTxt</strong><span>Full IDE/editor platform</span></div><div className="comparison-row"><span>Primary focus</span><strong>Text investigation</strong><span>Project development</span></div><div className="comparison-row"><span>Compare and merge</span><strong>Central workflow</strong><span>Usually one feature among many</span></div><div className="comparison-row"><span>Workspace search</span><strong>Included</strong><span>Included</span></div><div className="comparison-row"><span>Script workflows</span><strong>Use your interpreter</strong><span>Often extension-based</span></div><div className="comparison-row"><span>Price</span><strong>Freeware</strong><span>Varies</span></div></div>
      <h2>Choose DeltaTxt when…</h2><ul><li>You are diagnosing logs rather than developing a whole project.</li><li>You want diff, merge, search, and script tools in a narrow workbench.</li><li>You do not want to set up extensions, an account, or a project workspace.</li></ul>
      <h2>Choose a full IDE when…</h2><ul><li>You need language servers, debugging, builds, version-control workflows, and a plugin ecosystem together.</li><li>The text task is part of a larger software-development session already open in that tool.</li></ul>
      <Link className="button button-primary" href="/apps/deltatxt">Download DeltaTxt free</Link>
    </article>
  </PageShell>;
}
