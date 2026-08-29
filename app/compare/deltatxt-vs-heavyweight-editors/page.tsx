import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { ArticleHero, PageShell } from "@/app/components/PageShell";
import { links } from "@/app/lib/site";

export const metadata: Metadata = { title: "DeltaTxt vs. a full Python IDE", description: "Compare DeltaTxt's focused Python debugger, find and replace, and text comparison tools with a full project IDE.", alternates: { canonical: "/compare/deltatxt-vs-heavyweight-editors" } };

export default function DeltaComparison() {
  return <PageShell><ArticleHero eyebrow="Comparison / Python + text" title="DeltaTxt vs. a full Python IDE." intro="DeltaTxt keeps Python editing and debugging beside powerful find, replace, comparison, and merge tools. A full IDE covers the wider software project." />
    <article className="article-body wrap">
      <div className="comparison-table comparison-table-wide"><div className="comparison-row comparison-head"><span>Need</span><strong>DeltaTxt</strong><span>Full Python IDE</span></div><div className="comparison-row"><span>Primary focus</span><strong>Python scripts + technical text</strong><span>Whole-project development</span></div><div className="comparison-row"><span>Python run and debug</span><strong>Breakpoints, stepping, Locals</strong><span>Broader project debugger</span></div><div className="comparison-row"><span>Find and replace</span><strong>Document, workspace, and large-file tools</strong><span>Usually project search</span></div><div className="comparison-row"><span>Compare and merge</span><strong>Central workflow</strong><span>Usually one feature among many</span></div><div className="comparison-row"><span>Project tooling</span><strong>Deliberately focused</strong><span>Refactoring, builds, VCS, plugins</span></div><div className="comparison-row"><span>Price</span><strong>Freeware</strong><span>Varies</span></div></div>
      <h2>Choose DeltaTxt when…</h2><ul><li>You are writing or troubleshooting a Python script rather than managing a large software project.</li><li>You want debugging, find and replace, workspace search, and text comparison in one narrow workbench.</li><li>Your task crosses source, configuration, logs, and exported text.</li><li>You do not want to configure extensions, an account, or a project workspace first.</li></ul>
      <h2>Choose a full IDE when…</h2><ul><li>You need language-server refactoring, test discovery, compiler-driven builds, integrated source control, or a broad plugin ecosystem.</li><li>You need project-wide debugging for languages beyond DeltaTxt&apos;s focused Python debugger.</li><li>The text task is one part of a larger development session already open in that tool.</li></ul>
      <Link className="button button-primary" href={links.deltatxt.download}>Download DeltaTxt free</Link>
    </article>
  </PageShell>;
}
