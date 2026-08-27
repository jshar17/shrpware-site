import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "DeltaTxt — Focused Python IDE, find and replace, and text comparison",
  description: "A free native Windows Python workbench with run and debug controls, powerful find and replace, workspace search, and side-by-side text comparison.",
  alternates: { canonical: "/apps/deltatxt" },
  openGraph: { images: ["/apps/deltatxt/hero-workbench.webp"] },
  twitter: { card: "summary_large_image", images: ["/apps/deltatxt/hero-workbench.webp"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DeltaTxt",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows 10, Windows 11",
  description: "Free native Windows workbench for Python editing and debugging, powerful find and replace, workspace search, and text comparison.",
  softwareVersion: "0.3.1",
  featureList: ["Python editing and debugging", "Find and replace", "Workspace search and replace", "Side-by-side text comparison", "Merge workflows"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shrpware.com/apps/deltatxt",
  downloadUrl: "https://shrpware.com/go/deltatxt-download",
  image: "https://shrpware.com/apps/deltatxt/hero-workbench.webp",
  screenshot: [
    "https://shrpware.com/apps/deltatxt/gallery/windows-code-without-overhead.webp",
    "https://shrpware.com/apps/deltatxt/gallery/windows-search-workspace.webp",
    "https://shrpware.com/apps/deltatxt/gallery/windows-compare-clearly.webp",
  ],
};

const features = [
  ["A focused Python workspace", "Edit Python with syntax styling, folding, workspace navigation, Quick Open, and a function list without setting up a heavyweight project."],
  ["Run and debug Python", "Use detected environments, breakpoints, Continue, Step Over, Step Into, Step Out, Locals, Stack, and streamed output."],
  ["Find and replace precisely", "Search by plain text or regular expression with case and whole-word controls, then review or replace the matches you intend."],
  ["Search and replace a workspace", "Find a value across related code, configs, and logs, with preview-first replacement and backups for broader changes."],
  ["Compare text clearly", "Review versions side by side with inline changes, synchronized scrolling, filters, changes-only context, and unified diff export."],
  ["Merge with control", "Apply individual changes left or right, build a three-way merge draft, and resolve conflicts without overwriting the source files."],
];

const screenshots = [
  { src: "/apps/deltatxt/gallery/windows-code-without-overhead.webp", alt: "Python source file open in DeltaTxt with Run and Debug controls", caption: "Write and run Python", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-code-without-overhead-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-search-workspace.webp", alt: "Workspace search results across Python files in DeltaTxt", caption: "Find across a workspace", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-search-workspace-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-compare-clearly.webp", alt: "Two Python files compared side by side in DeltaTxt", caption: "Compare and merge changes", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-compare-clearly-thumb.webp" },
];

export default function DeltaTxtPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero wrap">
        <div className="product-hero-copy">
          <p className="eyebrow"><span />Python IDE · Text tools · Freeware</p>
          <div className="app-title-lockup"><img src="/apps/deltatxt/icon-160.webp" alt="" width={160} height={160} /><h1>DeltaTxt</h1></div>
          <h2>Write and debug Python. Find, replace, and compare with precision.</h2>
          <p>Edit and run Python, step through code with breakpoints, search and replace across files, and compare or merge text in one focused native Windows workbench.</p>
          <div className="hero-actions"><Link className="button button-primary" href={links.deltatxt.download}>Download free <span>↓</span></Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Microsoft Store</Link> : <span className="button button-disabled">Microsoft Store pending</span>}</div>
          <p className="fine-print">Windows 10/11 · Version 0.3.1 · 70 MB · x64 · Digitally signed · No account required</p>
        </div>
        <img className="product-hero-image" src="/apps/deltatxt/gallery/windows-code-without-overhead.webp" alt="Python source file open in DeltaTxt with Run and Debug controls" width={1920} height={1080} decoding="async" />
      </section>

      <section className="trust-band"><div className="wrap"><span>Python run + debug</span><span>Find + replace</span><span>Compare + merge</span><span>No telemetry</span></div></section>

      <section className="content-section wrap">
        <div className="section-heading"><p className="section-number">01 / CORE WORKFLOWS</p><h2>Python and text tools in one workbench.</h2></div>
        <div className="feature-card-grid">{features.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="gallery-section wrap">
        <div className="section-heading"><p className="section-number">02 / THE WORKBENCH</p><h2>See the tools in context.</h2></div>
        <ScreenshotGallery items={screenshots} label="DeltaTxt for Windows" />
      </section>

      <section className="workflow-section wrap">
        <div className="section-heading"><p className="section-number">03 / USE CASES</p><h2>Stay in the flow from code to text.</h2></div>
        <ol className="workflow-list">
          <li><span>01</span><div><h3>Write, run, and debug a Python script</h3><p>Move from editing to breakpoints, stepping, Locals, Stack, and output without opening a separate debugger.</p></div></li>
          <li><span>02</span><div><h3>Find and replace across related files</h3><p>Search code, configs, and logs together, then preview broader replacements before anything is changed.</p></div></li>
          <li><span>03</span><div><h3>Compare two versions before you keep one</h3><p>Review inline differences, filter noise, and apply or merge only the changes you want.</p></div></li>
        </ol>
        <div className="inline-actions"><Link className="text-link" href="/use-cases/python-ide-debugger">Python editing and debugging →</Link><Link className="text-link" href="/use-cases/find-replace-text-files">Find and replace →</Link><Link className="text-link" href="/use-cases/file-comparison-merge">Text comparison and merge →</Link></div>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading"><p className="section-number">04 / QUESTIONS</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list">
          <details><summary>Can DeltaTxt debug Python?</summary><p>Yes. Set breakpoints, then Continue, Step Over, Step Into, or Step Out while reviewing Locals, Stack, current-line state, and debugger output. DeltaTxt uses the Python interpreter installed on your computer.</p></details>
          <details><summary>How powerful is find and replace?</summary><p>Use case-sensitive, whole-word, or regular-expression search in one document or across a workspace. For workspace replacement, DeltaTxt builds a preview, revalidates files before applying changes, and keeps a backup tree.</p></details>
          <details><summary>Is DeltaTxt really free?</summary><p>Yes. DeltaTxt is freeware with no subscription, account, advertising, or paid tier required.</p></details>
          <details><summary>Does it collect usage data?</summary><p>No. DeltaTxt does not include telemetry, analytics, advertising, or automatic crash submission.</p></details>
          <details><summary>What happens when I run a script?</summary><p>User-selected scripts and interpreters run with your operating-system permissions. Review scripts and their dependencies before running them.</p></details>
          <details><summary>Where can I get help?</summary><p>Visit <Link href="/apps/deltatxt/support">DeltaTxt support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap"><p className="section-number">PYTHON + TEXT · FREEWARE · WINDOWS</p><h2>Download the focused Python and text workbench.</h2><div className="hero-actions"><Link className="button button-primary" href={links.deltatxt.download}>Download DeltaTxt</Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Get it from Microsoft</Link> : <span className="button button-disabled">Microsoft Store pending</span>}</div><div className="inline-actions closing-links"><Link className="text-link" href="/apps/deltatxt/changelog">Release notes and checksum →</Link><Link className="text-link" href="/compare/deltatxt-vs-heavyweight-editors">Compare with a full IDE →</Link><Link className="text-link" href="/apps/deltatxt/support">Support →</Link></div></section>
    </PageShell>
  );
}
