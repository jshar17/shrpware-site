import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "DeltaTxt — Native Mac and Windows text editor, diff, merge, and search",
  description: "A free native text and code editor for Mac and Windows, with workspace search, replace, side-by-side comparison, merge, and large-file tools.",
  alternates: { canonical: "/apps/deltatxt" },
  openGraph: { images: ["/apps/deltatxt/hero-windows-debug.webp"] },
  twitter: { card: "summary_large_image", images: ["/apps/deltatxt/hero-windows-debug.webp"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DeltaTxt",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS 13 or later, Windows 10, Windows 11",
  description: "Free text and code workbench built natively for Mac in Swift and available on Windows, with find and replace, workspace search, comparison, and merge tools.",
  softwareVersion: "0.3.2",
  featureList: ["Native Swift app for Mac", "Text and code editing", "Find and replace", "Workspace search and replace", "Streaming search and replace in large files", "Side-by-side text comparison", "Merge workflows", "Python editing and debugging on Windows"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://shrpware.com/apps/deltatxt",
  downloadUrl: "https://shrpware.com/go/deltatxt-download",
  image: "https://shrpware.com/apps/deltatxt/hero-windows-debug.webp",
  screenshot: [
    "https://shrpware.com/apps/deltatxt/hero-windows-debug.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-edit-with-focus.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-compare-with-confidence.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-search-every-file.webp",
    "https://shrpware.com/apps/deltatxt/gallery/mac-compare-folders.webp",
    "https://shrpware.com/apps/deltatxt/gallery/windows-code-without-overhead.webp",
    "https://shrpware.com/apps/deltatxt/gallery/windows-compare-clearly.webp",
    "https://shrpware.com/apps/deltatxt/gallery/windows-search-workspace.webp",
  ],
};

const features = [
  ["Native on both platforms", "Each edition is written for its own platform, so windows, menus, and shortcuts follow the conventions you already know."],
  ["Python tools on Windows", "Run and debug scripts with breakpoints, stepping, and Locals, plus direct pdb commands in the docked output panel."],
  ["Find and replace precisely", "Search by plain text or regular expression with case and whole-word controls, then replace only the matches you intend."],
  ["Search and replace a workspace", "Find a value across code, configs, and logs, then preview broader replacements and keep a backup."],
  ["Work through very large files", "Stream find and replace through logs and exports without holding the whole file in memory."],
  ["Compare and merge with control", "Review versions side by side, apply individual changes, and build a three-way merge draft without overwriting the inputs."],
];

const capabilities = [
  ["Languages", "Highlighting and structure", "Syntax highlighting for dozens of languages, with code folding, a function list, and a scrollable minimap."],
  ["Editing", "Precise editing", "Column selection, bookmarks, auto-indent, matching-brace highlighting, and Go to Line."],
  ["Folders", "Compare and sync folders", "Compare two folders side by side, then sync the differences with a preview and optional backups."],
  ["Encoding", "Encoding kept intact", "Detects and preserves UTF-8, UTF-16, UTF-32, BOM, and CRLF, LF, or CR line endings, so nothing is silently rewritten."],
  ["Recovery", "Safe saves", "Atomic writes with optional backups, crash recovery, and session restore that reopens your tabs."],
  ["Privacy", "Yours alone", "Freeware with no account, no telemetry, and no ads. Your files stay on your machine."],
];

const macScreenshots = [
  { src: "/apps/deltatxt/gallery/mac-edit-with-focus.webp", alt: "Python source file open in the native DeltaTxt editor for Mac with the workspace visible", caption: "Edit with focus", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-edit-with-focus-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-compare-with-confidence.webp", alt: "Two Python files compared side by side in DeltaTxt for Mac with added and removed lines highlighted", caption: "Compare with confidence", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-compare-with-confidence-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-search-every-file.webp", alt: "Workspace search results grouped by file in DeltaTxt for Mac", caption: "Search every file", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-search-every-file-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-compare-folders.webp", alt: "Two folders compared in DeltaTxt for Mac before previewing or syncing differences", caption: "Compare folders", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-compare-folders-thumb.webp" },
];

const windowsScreenshots = [
  { src: "/apps/deltatxt/gallery/windows-code-without-overhead.webp", alt: "Python source file open in the native DeltaTxt editor for Windows", caption: "Edit without overhead", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-code-without-overhead-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-compare-clearly.webp", alt: "Two Python files compared side by side in DeltaTxt for Windows with changes highlighted", caption: "Compare clearly", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-compare-clearly-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-search-workspace.webp", alt: "Workspace search results shown in DeltaTxt for Windows", caption: "Search the workspace", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-search-workspace-thumb.webp" },
];

function StoreLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`store-link-group${compact ? " store-link-group-compact" : ""}`}>
      <div className="store-actions" aria-label="Get DeltaTxt">
        {releaseStatus.deltaMacStoreReady ? (
          <Link className="store-button store-button-primary" href={links.deltatxt.macStore}>
            <strong>Mac App Store</strong><i aria-hidden="true">↗</i>
          </Link>
        ) : <span className="store-button store-button-disabled"><span>Mac edition</span><strong>App Store pending</strong></span>}
        {releaseStatus.deltaStoreReady ? (
          <Link className="store-button" href={links.deltatxt.store}>
            <strong>Microsoft Store</strong><i aria-hidden="true">↗</i>
          </Link>
        ) : <span className="store-button store-button-disabled"><span>Windows edition</span><strong>Microsoft Store pending</strong></span>}
      </div>
      <p className="direct-download"><Link href={links.deltatxt.download}>Windows installer <span aria-hidden="true">↓</span></Link></p>
    </div>
  );
}

export default function DeltaTxtPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero product-hero-deltatxt wrap">
        <div className="product-hero-copy">
          <p className="eyebrow"><span />Windows IDE · Mac editor · Freeware</p>
          <div className="app-title-lockup"><img src="/apps/deltatxt/icon-160.webp" alt="" width={160} height={160} /><h1>DeltaTxt</h1></div>
          <h2>Python debugging without the heavyweight IDE.</h2>
          <p>Set breakpoints, step through code, and inspect locals in a fast native Windows app. No Electron, no web wrapper.</p>
          <StoreLinks />
          <p className="fine-print">macOS 13+ · Windows 10/11 · No account required</p>
        </div>
        <div className="product-hero-debugger" aria-label="DeltaTxt Python debugging on Windows">
          <figure>
            <img src="/apps/deltatxt/hero-windows-debug.webp" alt="DeltaTxt Python debugger on Windows after stepping from a breakpoint, with its docked output panel and pdb command field visible" width={1672} height={941} fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className="trust-band"><div className="wrap"><span>Python debugger</span><span>Find + replace</span><span>Compare + merge</span><span>No telemetry</span></div></section>

      <section className="content-section wrap">
        <div className="section-heading"><p className="section-number">01 / CORE WORKFLOWS</p><h2>Focused text tools on Mac and Windows.</h2></div>
        <div className="feature-card-grid">{features.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="content-section wrap">
        <div className="section-heading"><p className="section-number">02 / FEATURES</p><h2>The tools you&rsquo;ll actually use.</h2></div>
        <ol className="workflow-list">{capabilities.map(([tag, title, body]) => <li key={title}><span>{tag}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="gallery-section platform-gallery-section wrap">
        <div className="section-heading"><p className="section-number">03 / THE WORKBENCH</p><h2>See both editions at work.</h2></div>
        <div className="platform-gallery-group" aria-labelledby="deltatxt-mac-gallery">
          <div className="platform-gallery-heading">
            <div><p className="platform-kicker">macOS 13+</p><h3 id="deltatxt-mac-gallery">Made like a Mac app.</h3><p>Swift + AppKit. Native windows, menus, shortcuts, and document behavior.</p></div>
          </div>
          <ScreenshotGallery items={macScreenshots} label="DeltaTxt for Mac" layout="featured" />
        </div>
        <div className="platform-gallery-group" aria-labelledby="deltatxt-windows-gallery">
          <div className="platform-gallery-heading">
            <div><p className="platform-kicker">Windows 10 / 11</p><h3 id="deltatxt-windows-gallery">Built for Windows.</h3><p>C# + .NET 8. Windows Forms, Scintilla, Explorer integration, and Python debugging.</p></div>
          </div>
          <ScreenshotGallery items={windowsScreenshots} label="DeltaTxt for Windows" layout="featured" />
        </div>
        <div className="inline-actions"><Link className="text-link" href="/use-cases/python-ide-debugger">Python editing and debugging →</Link><Link className="text-link" href="/use-cases/find-replace-text-files">Find and replace →</Link><Link className="text-link" href="/use-cases/file-comparison-merge">Text comparison and merge →</Link></div>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading"><p className="section-number">04 / QUESTIONS</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list">
          <details><summary>Is the Mac version native?</summary><p>Yes. DeltaTxt for Mac is built natively in Swift with AppKit. It is not an Electron app or a wrapped website.</p></details>
          <details><summary>Can DeltaTxt debug Python?</summary><p>Yes, in the Windows edition. Set breakpoints, then Continue, Step Over, Step Into, or Step Out while reviewing the current line, printing Locals, and entering direct pdb commands in the docked output panel. The Mac App Store edition focuses on editing and text tools and does not include script execution.</p></details>
          <details><summary>How powerful is find and replace?</summary><p>Use case-sensitive, whole-word, or regular-expression search in one document or across a workspace. For workspace replacement, DeltaTxt builds a preview, revalidates files before applying changes, and keeps a backup tree.</p></details>
          <details><summary>Is DeltaTxt really free?</summary><p>Yes. DeltaTxt is freeware with no subscription, account, advertising, or paid tier required.</p></details>
          <details><summary>Does it collect usage data?</summary><p>No. DeltaTxt does not include telemetry, analytics, advertising, or automatic crash submission.</p></details>
          <details><summary>What happens when I run a script?</summary><p>On Windows, user-selected scripts and interpreters run with your operating-system permissions. Review scripts and their dependencies before running them. The Mac App Store edition does not run scripts.</p></details>
          <details><summary>Where can I get help?</summary><p>Visit <Link href="/apps/deltatxt/support">DeltaTxt support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap"><p className="section-number">MAC + WINDOWS · FREEWARE</p><h2>Get DeltaTxt.</h2><StoreLinks compact /><div className="inline-actions closing-links"><Link className="text-link" href="/apps/deltatxt/changelog">Release notes and checksum →</Link><Link className="text-link" href="/compare/deltatxt-vs-heavyweight-editors">Compare with a full IDE →</Link><Link className="text-link" href="/apps/deltatxt/support">Support →</Link></div></section>
    </PageShell>
  );
}
