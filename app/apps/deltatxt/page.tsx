import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeltaTxt — Change, clearly | ShrpWare",
  description: "A lightweight native editor for source code, very large logs, comparison, merge, and Python troubleshooting.",
};

export default function DeltaTxtPage() {
  return (
    <main className="product-page delta-page">
      <header className="product-header"><a className="brand" href="/"><span>SHRP</span><span className="brand-mark">#</span></a><nav><a href="/">Store</a><a href="#features">Features</a><a href="/apps/deltatxt/privacy">Privacy</a></nav></header>
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

      <section className="delta-detail">
        <div><p className="section-number light-number">02 / TWO PLATFORMS</p><h2>Windows first.<br /><span>Native on both.</span></h2></div>
        <div className="platform-cards"><article><span>WINDOWS</span><h3>Complete edition</h3><p>Editing, workspace tools, large-file operations, compare and merge, multi-language execution, and Python debugging.</p></article><article><span>MACOS</span><h3>Active preview</h3><p>Native Swift/AppKit editing, search, compare, and Python debugging, with more workspace and large-file tools being ported.</p></article></div>
      </section>

      <section className="product-cta"><p className="section-number">03 / STATUS</p><h2>DeltaTxt is an early development preview.</h2><p>The Windows application is the complete edition. The native Mac edition is actively moving toward parity.</p><div className="cta-links"><a href="/apps/deltatxt/privacy">Read the privacy notice →</a></div></section>
      <footer className="product-footer"><a href="/">← ShrpWare store</a><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
