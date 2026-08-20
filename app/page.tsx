import type { Metadata } from "next";
import { SafeLink as Link } from "./components/SafeLink";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Apps with an edge",
  description: "WavePlume records and transcribes meetings locally. DeltaTxt edits large logs, compares files, and supports script-driven text work.",
  alternates: { canonical: "/" },
};

const products = [
  { index: "01", name: "WavePlume", href: "/apps/waveplume", icon: "/apps/waveplume/app-assets/png/waveplume-128.png", platform: "MAC + WINDOWS · $14.99", summary: "Record and transcribe meetings locally. No bot, cloud, or subscription.", className: "product-card product-card-wave" },
  { index: "02", name: "DeltaTxt", href: "/apps/deltatxt", icon: "/apps/deltatxt/icon.png", platform: "WINDOWS · FREEWARE", summary: "Edit large logs, compare files, and troubleshoot scripts. Free.", className: "product-card product-card-delta" },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ShrpWare",
  url: "https://shrpware.com",
  email: "support@shrpware.com",
  logo: "https://shrpware.com/brand/shrpware-wordmark.svg",
};

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <SiteHeader />

      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Apps with<strong>an edge.</strong></h1>
          <p className="hero-summary">Desktop apps for recording and transcribing meetings locally, and for editing large or complex text files. No account required.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#apps">Explore the apps <span aria-hidden="true">↘</span></Link>
            <Link className="button button-secondary" href="#standard">Why ShrpWare</Link>
          </div>
        </div>

        <div id="apps" className="product-stack" aria-label="ShrpWare app collection">
          <div className="stack-frame" aria-hidden="true" />
          {products.map((product) => (
            <Link href={product.href} className={product.className} key={product.name}>
              <img src={product.icon} alt="" />
              <span className="product-copy">
                <span className="product-meta">{product.index} / {product.platform}</span>
                <strong>{product.name}<sup>™</sup></strong>
                <span className="product-summary">{product.summary}</span>
              </span>
              <span className="product-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
          <div className="catalog-meta"><span>Catalog / 2026</span><span>2 desktop apps</span></div>
        </div>
      </section>

      <section id="standard" className="principles-section wrap">
        <div className="section-heading">
          <p className="section-number">01 / WHY SHRPWARE</p>
          <h2>Straightforward desktop software.</h2>
        </div>
        <div className="principle-grid">
          <article><span>01</span><h3>No account required</h3><p>Download the app and start using it without creating an account or profile.</p></article>
          <article><span>02</span><h3>Simple pricing</h3><p>WavePlume is a one-time purchase, and DeltaTxt is free. Neither app requires an account.</p></article>
          <article><span>03</span><h3>Built for specific tasks</h3><p>Each app focuses on a clear set of meeting or text-file workflows.</p></article>
        </div>
      </section>

      <section className="feature-section wrap">
        <div className="feature-copy">
          <p className="section-number">02 / WAVEPLUME</p>
          <h2>Record and transcribe meetings locally.</h2>
          <p>Record system audio and your microphone, then transcribe locally with Whisper. No meeting bot joins the call, and no audio is uploaded for processing.</p>
          <div className="inline-actions">
            <Link className="button button-primary" href="/apps/waveplume">See WavePlume</Link>
            <Link className="text-link" href="/compare/waveplume-vs-cloud-meeting-bots">Compare with cloud bots →</Link>
          </div>
        </div>
        <img className="feature-image" src="/apps/waveplume/hero-wave.webp" alt="WavePlume meeting recording and transcription interface" />
      </section>

      <section className="feature-section feature-section-reverse wrap">
        <div className="feature-copy">
          <p className="section-number">03 / DELTATXT</p>
          <h2>For text files that fight back.</h2>
          <p>Open large logs, search a workspace, compare versions, merge changes, and run Python-powered text workflows without opening a full IDE.</p>
          <div className="inline-actions">
            <Link className="button button-primary" href="/apps/deltatxt">See DeltaTxt</Link>
            <Link className="text-link" href="/use-cases/large-log-file-editor">Explore large log editing →</Link>
          </div>
        </div>
        <img className="feature-image" src="/apps/deltatxt/hero-workbench.webp" alt="DeltaTxt text editing workbench" />
      </section>

      <section className="use-case-section wrap">
        <div className="section-heading compact-heading">
          <p className="section-number">04 / USE CASES</p>
          <h2>Common ways to use the apps.</h2>
        </div>
        <div className="link-card-grid">
          <Link href="/use-cases/offline-meeting-transcription"><span>Meetings</span><strong>Offline meeting transcription</strong><b>→</b></Link>
          <Link href="/use-cases/large-log-file-editor"><span>Logs</span><strong>Large log file editing</strong><b>→</b></Link>
          <Link href="/use-cases/file-comparison-merge"><span>Diff + merge</span><strong>Compare and merge text files</strong><b>→</b></Link>
        </div>
      </section>

      <section className="closing-cta wrap">
        <p className="section-number">NO ACCOUNT. NO SUBSCRIPTION.</p>
        <h2>Choose the app that fits your work.</h2>
        <div className="hero-actions">
          <Link className="button button-primary" href="/apps/waveplume">Try WavePlume</Link>
          <Link className="button button-secondary" href="/apps/deltatxt">Get DeltaTxt free</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
