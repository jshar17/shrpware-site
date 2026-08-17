import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "../../Brand";

// Served from this domain rather than straight from the R2 bucket: corporate,
// school and hotel filters block r2.dev as a file-sharing domain, and a visitor
// behind one simply cannot download DeltaTxt — with no indication why.
const DOWNLOAD_URL = "/downloads/DeltaTxt-0.3.1-setup.exe";

const GALLERY = [
  {
    src: "/apps/deltatxt/gallery/windows-code-without-overhead.webp",
    alt: "DeltaTxt editing Python with the headline Code without the heavyweight IDE",
    title: "Fast, focused editing",
  },
  {
    src: "/apps/deltatxt/gallery/windows-compare-clearly.webp",
    alt: "DeltaTxt side-by-side file comparison with the headline See every change. Merge with confidence",
    title: "Clear comparison and merge",
  },
  {
    src: "/apps/deltatxt/gallery/windows-search-workspace.webp",
    alt: "DeltaTxt workspace search with the headline Search an entire workspace in seconds",
    title: "Workspace-wide search",
  },
];

export const metadata: Metadata = {
  title: "DeltaTxt™ — Free Native Text Editor, Diff & Large-File Tools",
  description:
    "A free native Windows editor for code, large logs, file comparison, merge work, workspace search, and practical Python debugging—without an account or subscription.",
  keywords: [
    "free Windows text editor",
    "freeware code editor",
    "large log file editor",
    "file comparison tool",
    "diff and merge tool",
    "workspace search",
    "Python debugger",
    "native Windows editor",
  ],
  alternates: { canonical: "/apps/deltatxt" },
  openGraph: {
    title: "DeltaTxt™ — Free Native Text Editor, Diff & Large-File Tools",
    description:
      "Edit code and large logs, compare and merge files, and search whole workspaces in a focused native freeware app.",
    url: "/apps/deltatxt",
    siteName: "ShrpWare",
    type: "website",
    images: [
      {
        url: "/apps/deltatxt/gallery/windows-compare-clearly.webp",
        width: 1920,
        height: 1080,
        alt: "DeltaTxt side-by-side file comparison on Windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaTxt™ — Free Native Text Editor & Diff Tool",
    description: "Focused freeware for code, logs, comparison, merge, search, and Python troubleshooting.",
    images: ["/apps/deltatxt/gallery/windows-compare-clearly.webp"],
  },
};

const SOFTWARE_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DeltaTxt",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows 10, Windows 11; macOS preview",
  description:
    "A free native text editor for code, very large logs, file comparison, merge work, workspace search, and practical Python debugging.",
  url: "https://shrpware.com/apps/deltatxt",
  image: "https://shrpware.com/apps/deltatxt/gallery/windows-compare-clearly.webp",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Syntax-aware native text editing",
    "Bounded-memory search and replace for large files",
    "Side-by-side comparison and three-way merge",
    "Workspace and folder search",
    "Script execution and Python debugging",
    "No account, telemetry, advertising, or subscription",
  ],
  author: { "@type": "Organization", name: "ShrpWare", url: "https://shrpware.com" },
};

export default function DeltaTxtPage() {
  return (
    <main className="product-page delta-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_SCHEMA) }}
      />

      <header className="product-header">
        <Brand />
        <nav>
          <Link href="/">Store</Link>
          <a href="#features">Features</a>
          <a href="#tour">Product tour</a>
          <a href="/apps/deltatxt/privacy">Privacy</a>
        </nav>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="product-overline">SHRPWARE / APP 02</p>
          <img className="hero-app-icon" src="/apps/deltatxt/icon.png" alt="DeltaTxt icon" width="128" height="128" fetchPriority="high" />
          <h1>DeltaTxt<sup className="trademark">™</sup></h1>
          <p className="product-page-tagline">Change, clearly.</p>
          <p className="product-page-lede">
            Edit code and large logs, compare and merge files, search entire workspaces, and troubleshoot Python in one focused native app. Freeware, without an account or subscription.
          </p>
          <div className="platform-row">
            <span>Windows 10/11 · Freeware</span>
            <span>macOS · Native preview</span>
            <span>No account · No subscription</span>
          </div>
          <div className="hero-actions">
            <a className="button product-button" href="#tour">See DeltaTxt <span>↓</span></a>
            <a className="button product-button" href="#availability">Download free <span>↓</span></a>
          </div>
        </div>
        <div className="product-hero-media delta-hero-art">
          <img src="/apps/deltatxt/hero-workbench.webp" alt="DeltaTxt icon surrounded by abstract code, diff, and search lines" width="1600" height="900" fetchPriority="high" decoding="async" />
        </div>
      </section>

      <section className="privacy-strip delta-strip">
        <span>FREEWARE</span><span>NO ACCOUNT</span><span>NO TELEMETRY</span><span>YOUR FILES</span>
      </section>

      <section className="wave-gallery-section delta-gallery-section" id="tour">
        <div className="wave-gallery-heading">
          <div><p className="section-number">01 / PRODUCT TOUR</p><h2>Built for the files<br />that demand more.</h2></div>
          <div className="wave-gallery-intro">
            <p>DeltaTxt stays quick for everyday editing, then brings serious tools forward when a source file, giant log, diff, merge, or workspace search needs more care.</p>
          </div>
        </div>
        <div className="delta-gallery-grid">
          {GALLERY.map((item, index) => (
            <figure key={item.src} className={index === 0 ? "delta-gallery-card delta-gallery-card-featured" : "delta-gallery-card"}>
              <img src={item.src} alt={item.alt} width="1920" height="1080" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              <figcaption><span>WINDOWS / 0{index + 1}</span>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="product-content" id="features">
        <div className="product-intro">
          <p className="section-number">02 / BUILT FOR TEXT</p>
          <h2>Fast for a note.<br />Ready for the hard file.</h2>
          <p>Native controls keep ordinary editing responsive. Purpose-built compare, merge, search, recovery, and script tools handle the work that basic editors avoid.</p>
        </div>
        <div className="feature-grid four-grid">
          <article><span>01</span><h3>Edit without overhead</h3><p>Tabbed editing, syntax styling, folding, themes, workspace navigation, document maps, and configurable details.</p></article>
          <article><span>02</span><h3>Handle large files safely</h3><p>Streaming search and replacement use bounded buffers, staged output, and optional backups.</p></article>
          <article><span>03</span><h3>Compare and merge</h3><p>Aligned side-by-side review, change navigation, three-way merge drafts, and folder comparison.</p></article>
          <article><span>04</span><h3>Run and debug Python</h3><p>Environment discovery, breakpoints, stepping, locals, and bounded output—without adopting a full IDE.</p></article>
        </div>
      </section>

      <section className="delta-specs" id="details">
        <div className="delta-specs-heading">
          <p className="section-number light-number">03 / UNDER THE HOOD</p>
          <h2>Careful with every<br />byte and change.</h2>
          <p>DeltaTxt combines a native editing surface with deliberate file handling and bounded-memory operations for technical text work.</p>
        </div>
        <div className="delta-spec-list">
          <article><span>FILES</span><h3>Preserve what matters</h3><p>Detect UTF-8, UTF-16, and UTF-32; preserve byte-order marks and line endings; save atomically; and warn when files change outside the app.</p></article>
          <article><span>LARGE DATA</span><h3>Search without opening</h3><p>Run streaming search and literal replacement directly on disk with bounded buffers, staged output, and optional backups.</p></article>
          <article><span>REVIEW</span><h3>Compare at the useful level</h3><p>Use synchronized scrolling, change navigation, token-level emphasis, context filtering, and unified-diff copying.</p></article>
          <article><span>MERGE</span><h3>Resolve without risking inputs</h3><p>Create an editable three-way merge draft, resolve left or right blocks, and preview folder synchronization before replacing files.</p></article>
          <article><span>RECOVERY</span><h3>Protect unfinished work</h3><p>Restore unsaved tabs after a crash and use per-tab read-only mode when production logs should never be changed.</p></article>
          <article><span>RUN + DEBUG</span><h3>Stay lightweight</h3><p>Run Python, PowerShell, JavaScript, batch, and Bash when installed. Python adds breakpoints, stepping, locals, and pdb commands.</p></article>
        </div>
      </section>

      <section className="delta-limits">
        <div><p className="section-number">04 / LARGE-FILE MODEL</p><h2>Clear limits.<br />Safer choices.</h2></div>
        <div className="limit-notes">
          <article><strong>64 MB</strong><p>Files above this size require a deliberate choice before opening in an editable tab; streaming search remains available.</p></article>
          <article><strong>32 MB</strong><p>Visual comparisons above this size ask for confirmation because the aligned diff model is held in memory.</p></article>
          <article><strong>Any size</strong><p>Folder comparison stays byte-accurate and bounded in memory, without loading every file into an editor.</p></article>
        </div>
      </section>

      <section className="delta-detail">
        <div><p className="section-number light-number">05 / FREEWARE</p><h2>Useful by default.<br /><span>Free by design.</span></h2></div>
        <div className="platform-cards">
          <article><span>WINDOWS 10/11</span><h3>Complete freeware edition</h3><p>Native Windows editing, workspace tools, large-file operations, compare and merge, multi-language execution, and Python debugging—with no subscription.</p></article>
          <article><span>MACOS</span><h3>Active native preview</h3><p>A from-scratch Swift/AppKit edition with native document behavior, editing, search, side-by-side compare, and Python debugging. More parity work is underway.</p></article>
        </div>
      </section>

      <section className="trial-section" id="availability">
        <p className="section-number">06 / AVAILABILITY</p>
        <h2>DeltaTxt is free to download.</h2>
        <p className="trial-lede">Download DeltaTxt for Windows and start editing, comparing, and troubleshooting right away. No trial clock, account, subscription, advertising, or telemetry.</p>
        <a className="trial-download" href={DOWNLOAD_URL}>↓ Download DeltaTxt free</a>
        <p className="trial-meta">Windows 10/11 · x64 · v0.3.1 · 70 MB · Freeware</p>
        <ol className="trial-steps">
          <li><b>1</b><p><strong>Run the installer</strong> from your Downloads. It installs just for you — no administrator password needed.</p></li>
          <li><b>2</b><p><strong>If “Windows protected your PC” appears,</strong> DeltaTxt isn’t code-signed yet. Click <strong>More info</strong>, then <strong>Run anyway</strong> to continue.</p></li>
          <li><b>3</b><p><strong>Open a file or compare two.</strong> Everything runs locally — no account, telemetry, or cloud upload.</p></li>
        </ol>
        <div className="cta-links"><a href="/apps/deltatxt/privacy">Read the privacy notice →</a></div>
      </section>

      <footer className="product-footer"><Link href="/">← ShrpWare store</Link><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
