import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "DeltaTxt — Native Mac and Windows text editor, diff, merge, and search",
  description: "A free text and code editor built natively for Mac in Swift, with workspace search, replace, side-by-side comparison, merge, and large-file tools.",
  alternates: { canonical: "/apps/deltatxt" },
  openGraph: { images: ["/apps/deltatxt/gallery/mac-edit-with-focus.webp"] },
  twitter: { card: "summary_large_image", images: ["/apps/deltatxt/gallery/mac-edit-with-focus.webp"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DeltaTxt",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS 13 or later, Windows 10, Windows 11",
  description: "Free text and code workbench built natively for Mac in Swift and available on Windows, with find and replace, workspace search, comparison, and merge tools.",
  softwareVersion: "0.3.1",
  featureList: ["Native Swift app for Mac", "Text and code editing", "Find and replace", "Workspace search and replace", "Side-by-side text comparison", "Merge workflows", "Python editing and debugging on Windows"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shrpware.com/apps/deltatxt",
  downloadUrl: "https://shrpware.com/go/deltatxt-download",
  image: "https://shrpware.com/apps/deltatxt/gallery/mac-edit-with-focus.webp",
  screenshot: [
    "https://shrpware.com/apps/deltatxt/gallery/mac-edit-with-focus.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-compare-with-confidence.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-search-every-file.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-compare-folders.webp",
  ],
};

const features = [
  ["Built natively for Mac in Swift", "The Mac edition uses Swift and AppKit, so its windows, menus, shortcuts, and document workflows feel at home on macOS."],
  ["Focused text and code editing", "Edit with syntax styling, folding, workspace navigation, Quick Open, a function list, and optional document tools."],
  ["A built-in Python IDE on Windows", "Run the active script and watch output stream live, set breakpoints, then Continue, Step Over, Step Into, or Step Out and inspect Locals at the stopped line. DeltaTxt finds an interpreter for you or uses the one you pick."],
  ["Find and replace precisely", "Search by plain text or regular expression with case and whole-word controls, then review or replace the matches you intend."],
  ["Search and replace a workspace", "Find a value across related code, configs, and logs, with preview-first replacement and backups for broader changes."],
  ["Compare and merge with control", "Review versions side by side, apply individual changes, export a unified diff, or build a three-way merge draft without overwriting the inputs."],
];

const macScreenshots = [
  { src: "/apps/deltatxt/gallery/mac-edit-with-focus.webp", alt: "Python source file open in the native DeltaTxt editor for Mac with the workspace visible", caption: "Edit with focus", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-edit-with-focus-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-compare-with-confidence.webp", alt: "Two Swift files compared side by side in DeltaTxt for Mac with added and removed lines highlighted", caption: "Compare with confidence", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-compare-with-confidence-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-search-every-file.webp", alt: "Workspace search results grouped by file in DeltaTxt for Mac", caption: "Search every file", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-search-every-file-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-compare-folders.webp", alt: "Two folders compared in DeltaTxt for Mac before previewing or syncing differences", caption: "Compare folders", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-compare-folders-thumb.webp" },
];

const windowsScreenshots = [
  { src: "/apps/deltatxt/gallery/windows-code-without-overhead.webp", alt: "Python source file open in DeltaTxt for Windows with the editor and run toolbar visible", caption: "Edit with focus", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-code-without-overhead-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-compare-clearly.webp", alt: "Two Python files compared side by side in DeltaTxt for Windows with changed lines highlighted", caption: "Compare with confidence", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-compare-clearly-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-search-workspace.webp", alt: "Workspace search results with file, line, and column detail in DeltaTxt for Windows", caption: "Search every file", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-search-workspace-thumb.webp" },
];

export default function DeltaTxtPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero wrap">
        <div className="product-hero-copy">
          <p className="eyebrow"><span />Mac + Windows · Text tools · Freeware</p>
          <div className="app-title-lockup"><img src="/apps/deltatxt/icon-160.webp" alt="" width={160} height={160} /><h1>DeltaTxt</h1></div>
          <h2>A code editor with a built-in Python IDE.</h2>
          <p>Built natively for Mac in Swift and available on Windows. Syntax-aware editing, Find All across a whole workspace, and side-by-side compare and merge. The Windows edition adds Python run and breakpoint debugging; the Mac App Store edition focuses on editing and text tools.</p>
          <div className="hero-actions">{releaseStatus.deltaMacStoreReady ? <Link className="button button-primary" href={links.deltatxt.macStore}>Mac App Store</Link> : <span className="button button-disabled">Mac App Store pending</span>}<Link className="button button-secondary" href={links.deltatxt.download}>Windows download <span>↓</span></Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Microsoft Store</Link> : null}</div>
          <p className="fine-print">macOS 13+ · Windows 10/11 · Version 0.3.1 · Free · No account required</p>
        </div>
        <img className="product-hero-image" src="/apps/deltatxt/gallery/mac-edit-with-focus.webp" alt="Python source file open in the native DeltaTxt editor for Mac" width={1920} height={1080} decoding="async" />
      </section>

      <section className="trust-band"><div className="wrap"><span>Native Swift on Mac</span><span>Find + replace</span><span>Compare + merge</span><span>No telemetry</span></div></section>

      <section className="content-section wrap">
        <div className="section-heading"><p className="section-number">01 / CORE WORKFLOWS</p><h2>Focused text tools on Mac and Windows.</h2></div>
        <div className="feature-card-grid">{features.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="gallery-section wrap">
        <div className="section-heading"><p className="section-number">02 / THE WORKBENCH</p><h2>See the tools in context.</h2></div>
        <p className="gallery-platform">Mac</p>
        <ScreenshotGallery items={macScreenshots} label="DeltaTxt for Mac" />
        <p className="gallery-platform">Windows</p>
        <ScreenshotGallery items={windowsScreenshots} label="DeltaTxt for Windows" />
      </section>

      <section className="workflow-section wrap">
        <div className="section-heading"><p className="section-number">03 / USE CASES</p><h2>Stay in the flow from code to text.</h2></div>
        <ol className="workflow-list">
          <li><span>01</span><div><h3>Edit text and code without the overhead</h3><p>Open a file or workspace and move between syntax-aware editing, search, navigation, and comparison without setting up a heavyweight project.</p></div></li>
          <li><span>02</span><div><h3>Find and replace across related files</h3><p>Search code, configs, and logs together, then preview broader replacements before anything is changed.</p></div></li>
          <li><span>03</span><div><h3>Compare two versions before you keep one</h3><p>Review inline differences, filter noise, and apply or merge only the changes you want.</p></div></li>
        </ol>
        <div className="inline-actions"><Link className="text-link" href="/use-cases/python-ide-debugger">Python editing and debugging →</Link><Link className="text-link" href="/use-cases/find-replace-text-files">Find and replace →</Link><Link className="text-link" href="/use-cases/file-comparison-merge">Text comparison and merge →</Link></div>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading"><p className="section-number">04 / QUESTIONS</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list">
          <details><summary>Is the Mac version native?</summary><p>Yes. DeltaTxt for Mac is built natively in Swift with AppKit. It is not an Electron app or a wrapped website.</p></details>
          <details><summary>Can DeltaTxt debug Python?</summary><p>Yes, in the Windows edition. Set breakpoints, then Continue, Step Over, Step Into, or Step Out, inspect local variables at the stopped line, and watch output stream as the script runs. The Mac App Store edition focuses on editing and text tools and does not run or debug scripts — the App Sandbox it ships under cannot launch an interpreter.</p></details>
          <details><summary>How powerful is find and replace?</summary><p>Use case-sensitive, whole-word, or regular-expression search in one document or across a workspace. For workspace replacement, DeltaTxt builds a preview, revalidates files before applying changes, and keeps a backup tree.</p></details>
          <details><summary>Is DeltaTxt really free?</summary><p>Yes. DeltaTxt is freeware with no subscription, account, advertising, or paid tier required.</p></details>
          <details><summary>Does it collect usage data?</summary><p>No. DeltaTxt does not include telemetry, analytics, advertising, or automatic crash submission.</p></details>
          <details><summary>What happens when I run a script?</summary><p>On Windows, user-selected scripts and interpreters run with your operating-system permissions. Review scripts and their dependencies before running them. The Mac App Store edition does not run scripts.</p></details>
          <details><summary>Where can I get help?</summary><p>Visit <Link href="/apps/deltatxt/support">DeltaTxt support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap"><p className="section-number">TEXT + CODE · FREEWARE · MAC + WINDOWS</p><h2>Get the focused text and code workbench.</h2><div className="hero-actions">{releaseStatus.deltaMacStoreReady ? <Link className="button button-primary" href={links.deltatxt.macStore}>Mac App Store</Link> : null}<Link className="button button-secondary" href={links.deltatxt.download}>Windows download</Link>{releaseStatus.deltaStoreReady ? <Link className="button button-secondary" href={links.deltatxt.store}>Microsoft Store</Link> : null}</div><div className="inline-actions closing-links"><Link className="text-link" href="/apps/deltatxt/changelog">Release notes and checksum →</Link><Link className="text-link" href="/compare/deltatxt-vs-heavyweight-editors">Compare with a full IDE →</Link><Link className="text-link" href="/apps/deltatxt/support">Support →</Link></div></section>
    </PageShell>
  );
}
