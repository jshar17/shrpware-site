import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { PageShell } from "@/app/components/PageShell";
import { ScreenshotGallery } from "@/app/components/ScreenshotGallery";
import { links, releaseStatus } from "@/app/lib/site";

const description = "DeltaTxt is a free, native code editor and diff tool for Mac and Windows: file compare, three-way merge, find in files, folder compare, and a large log viewer. Markdown preview and a JSON formatter are coming to Mac in 0.3.3.";
const socialImage = { url: "/apps/deltatxt/gallery/mac-code-editor.webp", width: 1920, height: 1080, alt: "DeltaTxt code editor for Mac with a Python project open" };

export const metadata: Metadata = {
  title: "DeltaTxt — Code editor, diff & merge for Mac and Windows",
  description,
  alternates: { canonical: "/apps/deltatxt" },
  openGraph: { type: "website", siteName: "ShrpWare", url: "/apps/deltatxt", title: "DeltaTxt — Code Editor, Diff & Merge", description, images: [socialImage] },
  twitter: { card: "summary_large_image", title: "DeltaTxt — Code Editor, Diff & Merge", description, images: [socialImage.url] },
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
  ["Highlighting and structure", "Syntax highlighting for dozens of languages, with code folding, a function list, and a scrollable minimap."],
  ["Precise editing", "Column selection, bookmarks, auto-indent, matching-brace highlighting, and Go to Line."],
  ["Compare and sync folders", "Compare two folders side by side, then sync the differences with a preview and optional backups."],
  ["Encoding kept intact", "Detects and preserves UTF-8, UTF-16, UTF-32, BOM, and CRLF, LF, or CR line endings, so nothing is silently rewritten."],
  ["Safe saves", "Atomic writes with optional backups, crash recovery, and session restore that reopens your tabs."],
  ["Yours alone", "Freeware with no account, no telemetry, and no ads. Your files stay on your machine."],
];

const macScreenshots = [
  { src: "/apps/deltatxt/gallery/mac-code-editor.webp", alt: "DeltaTxt code editor for Mac with a Python file open, showing syntax highlighting, code folding, tabs, and the workspace explorer", caption: "Code editor", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-code-editor-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-diff-compare.webp", alt: "DeltaTxt for Mac side-by-side diff comparing two versions of a Python file with word-level highlights and per-change copy and apply controls", caption: "Diff and compare", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-diff-compare-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-find-in-files.webp", alt: "DeltaTxt for Mac find in files, searching every file in a project folder with match case, whole word, and regex options and results grouped by file and line", caption: "Find in files", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-find-in-files-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-three-way-merge.webp", alt: "DeltaTxt for Mac three-way merge stepping through a conflict in a Python file, with the left and right changes side by side", caption: "Three-way merge", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-three-way-merge-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-folder-compare.webp", alt: "DeltaTxt for Mac folder compare listing changed, left-only, and right-only files, with sync direction, backup, and preview controls", caption: "Folder compare", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-folder-compare-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-markdown-preview.webp", alt: "DeltaTxt for Mac Markdown preview rendering a README beside its Markdown source", caption: "Markdown preview", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-markdown-preview-thumb.webp" },
  { src: "/apps/deltatxt/gallery/mac-logs-large-files.webp", alt: "DeltaTxt for Mac log viewer with Find All pulling every ERROR line of a sync log into one list", caption: "Logs and large files", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/mac-logs-large-files-thumb.webp" },
];

const windowsScreenshots = [
  { src: "/apps/deltatxt/gallery/windows-code-without-overhead.webp", alt: "Python source file open in DeltaTxt for Windows with the editor and run toolbar visible", caption: "Edit without overhead", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-code-without-overhead-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-compare-clearly.webp", alt: "Two Python files compared side by side in DeltaTxt for Windows with changed lines highlighted", caption: "Compare clearly", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-compare-clearly-thumb.webp" },
  { src: "/apps/deltatxt/gallery/windows-search-workspace.webp", alt: "Workspace search results with file, line, and column detail in DeltaTxt for Windows", caption: "Search the workspace", width: 1920, height: 1080, thumbnail: "/apps/deltatxt/gallery/windows-search-workspace-thumb.webp" },
];

const pageUrl = "https://shrpware.com/apps/deltatxt";
const macAppStoreUrl = "https://apps.apple.com/us/app/deltatxt/id6804090746";
const publisher = { "@type": "Organization", name: "ShrpWare", url: "https://shrpware.com" };
const absolute = (path: string) => `https://shrpware.com${path}`;

// Two nodes because the editions ship on separate version tracks, and only the
// Windows one runs or debugs scripts. Keep Python claims off the Mac node.
//
// The Mac node describes what the App Store sells today: 0.3.1. 0.3.3 is in
// App Review. When Apple approves it, set softwareVersion to "0.3.3", add
// Markdown preview, JSON and XML formatting, Follow File, and snippets and
// macros back to the description and featureList, and drop the screenshot
// filter. The full checklist is in marketing/launch-kit.md.
const macOnSale = { version: "0.3.1", screenshots: macScreenshots.filter((shot) => !shot.src.includes("markdown-preview")) };
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}#mac`,
      name: "DeltaTxt",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Code editor",
      operatingSystem: "macOS 13 or later",
      softwareVersion: macOnSale.version,
      description: "Free native code editor for Mac, built in Swift, with side-by-side diff and file compare, three-way merge, find in files, folder compare, and search through large log files.",
      featureList: ["Code editor with syntax highlighting, folding, and a workspace explorer", "Side-by-side diff with word-level highlights", "Three-way merge", "Find and replace in files", "Folder compare and sync", "Search and replace in large files"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: macAppStoreUrl },
      url: pageUrl,
      downloadUrl: macAppStoreUrl,
      installUrl: macAppStoreUrl,
      image: absolute(macScreenshots[0].src),
      screenshot: macOnSale.screenshots.map((shot) => absolute(shot.src)),
      publisher,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}#windows`,
      name: "DeltaTxt",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Code editor",
      operatingSystem: "Windows 10, Windows 11",
      softwareVersion: "0.3.2",
      description: "Free native code editor for Windows with find in files, file compare, three-way merge, streaming search in large files, and Python run and debug.",
      featureList: ["Text and code editing", "Find and replace in files", "Streaming search and replace in large files", "Side-by-side text comparison", "Three-way merge", "Python editing and debugging"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: pageUrl,
      downloadUrl: absolute(links.deltatxt.download),
      image: absolute("/apps/deltatxt/hero-windows-debug.webp"),
      screenshot: [absolute("/apps/deltatxt/hero-windows-debug.webp"), ...windowsScreenshots.map((shot) => absolute(shot.src))],
      publisher,
    },
  ],
};

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
    <PageShell accent="deltatxt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="product-hero product-hero-deltatxt wrap">
        <div className="product-hero-copy">
          <div className="app-title-lockup"><img src="/apps/deltatxt/icon-160.webp" alt="" width={160} height={160} /><h1>DeltaTxt</h1></div>
          <h2>Python debugging without the heavyweight IDE.</h2>
          <p>Set breakpoints, step through code, and inspect locals in a fast native Windows app. No Electron, no web wrapper.</p>
          <StoreLinks />
          <p className="fine-print">Mac + Windows · Freeware</p>
        </div>
        <div className="product-hero-debugger" aria-label="DeltaTxt Python debugging on Windows">
          <figure>
            <img src="/apps/deltatxt/hero-windows-debug.webp" alt="DeltaTxt Python debugger on Windows after stepping from a breakpoint, with its docked output panel and pdb command field visible" width={1672} height={941} fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className="content-section wrap">
        <div className="section-heading" data-arrival><h2>Focused text tools on Mac and Windows.</h2></div>
        <div className="feature-card-grid" data-arrival>{features.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="content-section wrap">
        <div className="section-heading" data-arrival><h2>The tools you&rsquo;ll actually use.</h2></div>
        <ol className="workflow-list" data-arrival>{capabilities.map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="gallery-section platform-gallery-section wrap">
        <div className="section-heading" data-arrival><h2>See both editions at work.</h2></div>
        <div className="platform-gallery-group" data-arrival aria-labelledby="deltatxt-mac-gallery">
          <div className="platform-gallery-heading">
            <div><h3 id="deltatxt-mac-gallery">Made like a Mac app.</h3><p>Swift + AppKit. Native windows, menus, shortcuts, and document behavior. Coming in 0.3.3, now in App Store review: Markdown preview, snippets, macros, Follow File for live logs, and JSON and XML formatting.</p></div>
          </div>
          <ScreenshotGallery items={macScreenshots} label="DeltaTxt for Mac" layout="featured" />
        </div>
        <div className="platform-gallery-group" data-arrival aria-labelledby="deltatxt-windows-gallery">
          <div className="platform-gallery-heading">
            <div><h3 id="deltatxt-windows-gallery">Built for Windows.</h3><p>C# + .NET 8. Windows Forms, Scintilla, Explorer integration, and Python debugging.</p></div>
          </div>
          <ScreenshotGallery items={windowsScreenshots} label="DeltaTxt for Windows" layout="featured" />
        </div>
        <div className="inline-actions"><Link className="text-link" href="/use-cases/python-ide-debugger">Python editing and debugging →</Link><Link className="text-link" href="/use-cases/find-replace-text-files">Find and replace →</Link><Link className="text-link" href="/use-cases/file-comparison-merge">Text comparison and merge →</Link></div>
      </section>

      <section className="faq-section wrap">
        <div className="section-heading" data-arrival><h2>Frequently asked questions.</h2></div>
        <div className="faq-list" data-arrival>
          <details><summary>Is the Mac version native?</summary><p>Yes. DeltaTxt for Mac is built natively in Swift with AppKit. It is not an Electron app or a wrapped website.</p></details>
          <details><summary>Can DeltaTxt debug Python?</summary><p>Yes, in the Windows edition. Set breakpoints, then Continue, Step Over, Step Into, or Step Out while reviewing the current line, printing Locals, and entering direct pdb commands in the docked output panel. The Mac App Store edition focuses on editing and text tools and does not run or debug scripts — the App Sandbox it ships under cannot launch an interpreter.</p></details>
          <details><summary>How powerful is find and replace?</summary><p>Use case-sensitive, whole-word, or regular-expression search in one document or across a workspace. For workspace replacement, DeltaTxt builds a preview, revalidates files before applying changes, and keeps a backup tree.</p></details>
          <details><summary>Is DeltaTxt really free?</summary><p>Yes. DeltaTxt is freeware with no subscription, account, advertising, or paid tier required.</p></details>
          <details><summary>Does it collect usage data?</summary><p>No. DeltaTxt does not include telemetry, analytics, advertising, or automatic crash submission.</p></details>
          <details><summary>What happens when I run a script?</summary><p>On Windows, user-selected scripts and interpreters run with your operating-system permissions. Review scripts and their dependencies before running them. The Mac App Store edition does not run scripts.</p></details>
          <details><summary>Where can I get help?</summary><p>The <Link href="/apps/deltatxt/guide">Mac user guide</Link> covers every menu and preference. For a specific problem, visit <Link href="/apps/deltatxt/support">DeltaTxt support</Link> or email <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p></details>
        </div>
      </section>

      <section className="closing-cta wrap" data-arrival><h2>Get DeltaTxt.</h2><StoreLinks compact /><div className="inline-actions closing-links"><Link className="text-link" href="/apps/deltatxt/guide">Mac user guide →</Link><Link className="text-link" href="/apps/deltatxt/changelog">Release notes and checksum →</Link><Link className="text-link" href="/compare/deltatxt-vs-heavyweight-editors">Compare with a full IDE →</Link><Link className="text-link" href="/apps/deltatxt/support">Support →</Link></div></section>
    </PageShell>
  );
}
