import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeltaTxt — Change, clearly | ShrpWare",
  description: "A lightweight native editor for source code, very large logs, file comparison, merge, and practical script troubleshooting.",
};

export default function DeltaTxtPage() {
  return (
    <main className="product-page delta-page">
      <header className="product-header"><a className="brand" href="/"><span>SHRP</span><span className="brand-mark">#</span></a><nav><a href="/">Store</a><a href="#features">Features</a><a href="#details">Details</a><a href="/apps/deltatxt/privacy">Privacy</a></nav></header>
      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="product-overline">SHRPWARE / APP 02</p><img className="hero-app-icon" src="/apps/deltatxt/icon.png" alt="DeltaTxt icon" />
          <h1>DeltaTxt</h1><p className="product-page-tagline">Change, clearly.</p>
          <p className="product-page-lede">A lightweight native editor for source code, very large logs, file comparison, merge work, and practical Python troubleshooting.</p>
          <div className="platform-row"><span>Windows edition</span><span>macOS preview</span><span>Development preview</span></div>
          <a className="button product-button" href="#features">Explore the workbench <span>↓</span></a>
        </div>
        <div className="product-hero-media delta-hero-media">
          <div className="code-window large-code" aria-label="Illustration of DeltaTxt editing and comparison">
            <div className="code-top"><span /><span /><span /><b>parser.py ↔ parser-revised.py</b></div>
            <div className="code-body"><ol><li><i>def</i> parse_document(path):</li><li>    encoding = detect(path)</li><li className="removed">-   return read_all(path)</li><li className="added">+   return stream(path, encoding)</li><li></li><li><i>if</i> __name__ == <em>"__main__"</em>:</li><li>    inspect_changes()</li></ol><div className="code-map"><span /><span /><span /><span /><span /><span /><span /></div></div>
            <div className="code-status"><span>COMPARE: 2 CHANGES</span><span>UTF-8</span><span>LN 42, COL 16</span></div>
          </div>
        </div>
      </section>

      <section className="privacy-strip delta-strip"><span>NO TELEMETRY</span><span>ATOMIC SAVES</span><span>BOUNDED-MEMORY TOOLS</span><span>NATIVE UI</span></section>

      <section className="product-content" id="features">
        <div className="product-intro"><p className="section-number">01 / BUILT FOR TEXT</p><h2>Fast for a note.<br />Ready for the hard file.</h2><p>DeltaTxt keeps everyday editing quick, then brings focused tools forward when a log, diff, merge, or Python process needs more care.</p></div>
        <div className="feature-grid four-grid">
          <article><span>01</span><h3>Edit without overhead</h3><p>Tabbed editing, syntax styling, folding, themes, workspace navigation, document maps, and configurable details.</p></article>
          <article><span>02</span><h3>Handle large files safely</h3><p>Streaming search and replacement use bounded buffers, staged output, and optional backups.</p></article>
          <article><span>03</span><h3>Compare and merge</h3><p>Aligned side-by-side review, change navigation, three-way merge drafts, and folder comparison.</p></article>
          <article><span>04</span><h3>Run and debug Python</h3><p>Environment discovery, breakpoints, stepping, locals, and a bounded output panel without a full IDE.</p></article>
        </div>
      </section>

      <section className="delta-specs" id="details">
        <div className="delta-specs-heading">
          <p className="section-number light-number">02 / UNDER THE HOOD</p>
          <h2>Made for the files<br />other editors avoid.</h2>
          <p>DeltaTxt combines a native editing surface with careful, bounded-memory operations for technical text work.</p>
        </div>
        <div className="delta-spec-list">
          <article>
            <span>FILES</span>
            <h3>Preserve what matters</h3>
            <p>Detect UTF-8, UTF-16, and UTF-32; preserve byte-order marks and line endings; save atomically; and warn when a file changes outside the app.</p>
          </article>
          <article>
            <span>LARGE DATA</span>
            <h3>Search without opening</h3>
            <p>Run streaming search and literal replacement directly on disk with bounded buffers, staged output, and optional backup files.</p>
          </article>
          <article>
            <span>REVIEW</span>
            <h3>Compare at the useful level</h3>
            <p>Review aligned files with synchronized scrolling, change navigation, token-level emphasis, context filtering, and unified-diff copying.</p>
          </article>
          <article>
            <span>MERGE</span>
            <h3>Resolve without risking inputs</h3>
            <p>Create an editable three-way merge draft, resolve left or right blocks, and review folder synchronization before any file is replaced.</p>
          </article>
          <article>
            <span>RECOVERY</span>
            <h3>Protect unfinished work</h3>
            <p>Restore unsaved tabs after a crash, use per-tab read-only mode for production logs, and keep recent files and workspaces validated.</p>
          </article>
          <article>
            <span>RUN + DEBUG</span>
            <h3>Stay lightweight</h3>
            <p>Run Python, PowerShell, JavaScript, batch, and Bash when installed. Python adds environment discovery, breakpoints, stepping, locals, and pdb commands.</p>
          </article>
        </div>
      </section>

      <section className="delta-limits">
        <div>
          <p className="section-number">03 / LARGE-FILE MODEL</p>
          <h2>Clear limits.<br />Safer choices.</h2>
        </div>
        <div className="limit-notes">
          <article><strong>64 MB</strong><p>Files above this size require a deliberate choice before opening in an editable tab; streaming search remains available.</p></article>
          <article><strong>32 MB</strong><p>Visual comparisons above this size ask for confirmation because the aligned diff model is held in memory.</p></article>
          <article><strong>Any size</strong><p>Folder comparison stays byte-accurate and bounded in memory, without loading every file into an editor.</p></article>
        </div>
      </section>

      <section className="delta-detail">
        <div><p className="section-number light-number">04 / TWO PLATFORMS</p><h2>Windows first.<br /><span>Native on both.</span></h2></div>
        <div className="platform-cards"><article><span>WINDOWS 10+</span><h3>Complete edition</h3><p>Native Windows Forms and Scintilla editing, workspace tools, large-file operations, compare and merge, multi-language execution, and Python debugging.</p></article><article><span>MACOS</span><h3>Active native preview</h3><p>A from-scratch Swift/AppKit edition with native document behavior, editing, search, side-by-side compare, and Python debugging. Workspace and large-file parity is still in progress.</p></article></div>
      </section>

      <section className="product-cta"><p className="section-number">05 / STATUS</p><h2>DeltaTxt is an early development preview.</h2><p>The Windows build is prepared for Microsoft Store packaging. Signed Windows and notarized macOS releases are still being readied for public distribution.</p><div className="cta-links"><a href="/apps/deltatxt/privacy">Read the privacy notice →</a></div></section>
      <footer className="product-footer"><a href="/">← ShrpWare store</a><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
