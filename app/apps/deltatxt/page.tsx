import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "DeltaTxt — Large log editor, diff, merge, and scripts",
  description: "A free native Windows editor for large logs, file comparison, workspace search, merge workflows, and Python-powered text tools.",
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
  description: "Free native editor for large logs, file comparison, workspace search, and script-driven text workflows.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shrpware.com/apps/deltatxt",
  image: "https://shrpware.com/apps/deltatxt/hero-workbench.webp",
};

const features = [
  ["Open large text files", "Open and edit large logs and other text files without loading a full IDE."],
  ["Compare and merge", "View two versions side by side and choose which changes to keep."],
  ["Search a workspace", "Search for a value across related logs, configuration files, and source files."],
  ["Automate with Python", "Run your own scripts and interpreters for repeatable cleanup, parsing, and transformation."],
  ["Local recovery", "Keep preferences and recovery snapshots on your computer with no account or automatic upload."],
  ["Free to use", "DeltaTxt is freeware: no subscription, account, analytics, or advertising."],
];

const screenshots = [
  { src: "/apps/deltatxt/gallery/windows-code-without-overhead.webp", alt: "Code and text editing in DeltaTxt", caption: "Edit code and text" },
  { src: "/apps/deltatxt/gallery/windows-compare-clearly.webp", alt: "Two files compared in DeltaTxt", caption: "Compare two files" },
  { src: "/apps/deltatxt/gallery/windows-search-workspace.webp", alt: "Workspace search results in DeltaTxt", caption: "Search a workspace" },
];

export default function DeltaTxtPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero wrap">
        <div className="product-hero-copy">
          <p className="eyebrow"><span />Text editor · Freeware</p>
          <div className="app-title-lockup"><img src="/apps/deltatxt/icon.png" alt="" /><h1>DeltaTxt</h1></div>
          <h2>Edit large files, compare versions, and automate text work.</h2>
          <p>Edit large logs, compare and merge files, search whole workspaces, and run Python-powered text workflows in one native Windows app.</p>
          <div className="hero-actions"><Link className="button button-primary" href={links.deltatxt.download}>Download free <span>↓</span></Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Microsoft Store</Link> : <span className="button button-disabled">Microsoft Store pending</span>}</div>
          <p className="fine-print">Windows 10/11 · Version 0.3.1 · 70 MB · x64 · Digitally signed · No account required</p>
        </div>
        <img className="product-hero-image" src="/apps/deltatxt/hero-workbench.webp" alt="DeltaTxt workbench editing a technical text file" />
      </section>

      <section className="trust-band"><div className="wrap"><span>Freeware</span><span>No telemetry</span><span>No account</span><span>Local files</span></div></section>

      <section className="content-section wrap">
        <div className="section-heading"><p className="section-number">01 / FEATURES</p><h2>What DeltaTxt does.</h2></div>
        <div className="feature-card-grid">{features.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="gallery-section wrap">
        <div className="section-heading"><p className="section-number">02 / WINDOWS</p><h2>DeltaTxt for Windows.</h2></div>
        <ScreenshotGallery items={screenshots} label="DeltaTxt for Windows" />
      </section>

      <section className="workflow-section wrap">
        <div className="section-heading"><p className="section-number">03 / USE CASES</p><h2>When DeltaTxt is useful.</h2></div>
        <ol className="workflow-list">
          <li><span>01</span><div><h3>When a log is large</h3><p>Open the file, search for an error or identifier, and review the surrounding lines.</p></div></li>
          <li><span>02</span><div><h3>When you need to compare two files</h3><p>View them side by side and merge the changes you want to keep.</p></div></li>
          <li><span>03</span><div><h3>When you repeat the same cleanup</h3><p>Use a Python or script workflow instead of editing the same pattern by hand.</p></div></li>
        </ol>
        <div className="inline-actions"><Link className="text-link" href="/use-cases/large-log-file-editor">Large log editing →</Link><Link className="text-link" href="/use-cases/file-comparison-merge">File comparison and merge →</Link></div>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading"><p className="section-number">04 / QUESTIONS</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list">
          <details><summary>Is DeltaTxt really free?</summary><p>Yes. DeltaTxt is freeware with no subscription, account, advertising, or paid tier required.</p></details>
          <details><summary>Does it collect usage data?</summary><p>No. DeltaTxt does not include telemetry, analytics, advertising, or automatic crash submission.</p></details>
          <details><summary>What happens when I run a script?</summary><p>User-selected scripts and interpreters run with your operating-system permissions. Review scripts and their dependencies before running them.</p></details>
          <details><summary>Where can I get help?</summary><p>Visit <Link href="/apps/deltatxt/support">DeltaTxt support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap"><p className="section-number">FREEWARE · WINDOWS</p><h2>Download DeltaTxt free for Windows.</h2><div className="hero-actions"><Link className="button button-primary" href={links.deltatxt.download}>Download DeltaTxt</Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Get it from Microsoft</Link> : <span className="button button-disabled">Microsoft Store pending</span>}</div></section>
    </PageShell>
  );
}
