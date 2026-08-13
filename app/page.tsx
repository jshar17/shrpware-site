import { Brand } from "./Brand";

export default function Home() {
  return (
    <main className="store-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Brand href="#top" />
          <nav aria-label="Main navigation">
            <a href="#apps">Apps</a>
            <a href="#standard">Standard</a>
            <a href="#studio">Studio</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />Independent software studio</p>
            <h1>Apps with<br /><span>an edge.</span></h1>
            <p className="hero-text">
              Focused desktop software for people who want capable tools,
              local control, and less noise.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#apps">Explore the apps <span>↘</span></a>
              <a className="button button-secondary" href="#standard">How we build</a>
            </div>
          </div>

          <div className="product-stack" aria-label="ShrpWare app collection">
            <a className="stack-card stack-wave" href="/apps/waveplume">
              <img src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="WavePlume app icon" width="128" height="128" />
              <div><span>01 / WINDOWS · AVAILABLE NOW</span><strong>WavePlume<sup className="trademark">™</sup></strong></div>
              <b>↗</b>
            </a>
            <a className="stack-card stack-delta" href="/apps/deltatxt">
              <img src="/apps/deltatxt/icon.png" alt="DeltaTxt app icon" />
              <div><span>02 / WINDOWS · FREEWARE</span><strong>DeltaTxt<sup className="trademark">™</sup></strong></div>
              <b>↗</b>
            </a>
            <div className="stack-meta">
              <span>CATALOG / 2026</span><span>2 FOCUSED APPS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog section" id="apps">
        <div className="container">
          <div className="section-heading">
            <p className="section-number">01 / THE APPS</p>
            <h2>Purpose-built.<br />Nothing extra.</h2>
            <p>Two serious desktop tools, each designed around a job worth doing well.</p>
          </div>

          <article className="product-row wave-row">
            <div className="product-copy">
              <div className="product-title-line">
                <img className="product-icon" src="/apps/waveplume/app-assets/png/waveplume-128.png" alt="WavePlume icon" width="128" height="128" loading="lazy" decoding="async" />
                <div><p className="product-index">APP / 01</p><h3>WavePlume<sup className="trademark">™</sup></h3></div>
              </div>
              <p className="product-tagline">Every wave becomes a word.</p>
              <p className="product-description">
                Capture system audio, microphone, and screen, then create searchable
                transcripts locally with Whisper. No bot joins and nothing uploads.
              </p>
              <ul className="feature-chips" aria-label="WavePlume highlights">
                <li>Windows available</li><li>Local Whisper</li><li>No cloud upload</li>
              </ul>
              <div className="product-links">
                <a className="text-link" href="/apps/waveplume">Explore WavePlume <span>→</span></a>
                <a className="text-link product-store-link" href="https://apps.microsoft.com/detail/9p6h8n3vjxbx?hl=en-US&amp;gl=US" target="_blank" rel="noreferrer">Get for Windows <span>↗</span></a>
              </div>
            </div>
            <a className="product-media wave-media" href="/apps/waveplume" aria-label="View WavePlume">
              <img src="/apps/waveplume/gallery/windows-searchable-transcripts.webp" alt="WavePlume Windows transcript with the headline Every word becomes searchable" width="1920" height="1080" loading="lazy" decoding="async" />
              <span className="media-label">NOW ON MICROSOFT STORE</span>
            </a>
          </article>

          <article className="product-row delta-row">
            <div className="product-copy">
              <div className="product-title-line">
                <img className="product-icon" src="/apps/deltatxt/icon.png" alt="DeltaTxt icon" />
                <div><p className="product-index">APP / 02</p><h3>DeltaTxt<sup className="trademark">™</sup></h3></div>
              </div>
              <p className="product-tagline">Change, clearly.</p>
              <p className="product-description">
                A free native editor for source code, large logs, file comparison,
                merge work, workspace search, and practical Python troubleshooting.
              </p>
              <ul className="feature-chips" aria-label="DeltaTxt highlights">
                <li>Freeware</li><li>Large-file tools</li><li>Compare + merge</li>
              </ul>
              <a className="text-link" href="/apps/deltatxt">Explore DeltaTxt <span>→</span></a>
            </div>
            <a className="product-media delta-media" href="/apps/deltatxt" aria-label="View DeltaTxt">
              <img src="/apps/deltatxt/gallery/windows-compare-clearly.webp" alt="DeltaTxt file comparison with the headline See every change. Merge with confidence" width="1920" height="1080" loading="lazy" decoding="async" />
              <span className="media-label">FREEWARE · FREE DOWNLOAD</span>
            </a>
          </article>
        </div>
      </section>

      <section className="standard section" id="standard">
        <div className="container">
          <p className="section-number light-number">02 / THE STANDARD</p>
          <div className="standard-grid">
            <h2>Software should<br /><span>earn its place.</span></h2>
            <div className="principles">
              <article><span>01</span><div><h3>Keep data close</h3><p>Local-first where it matters, with clear boundaries around every connection.</p></div></article>
              <article><span>02</span><div><h3>Respect the platform</h3><p>Native controls, familiar behavior, and careful handling of the files you trust to us.</p></div></article>
              <article><span>03</span><div><h3>Build the useful part</h3><p>Deep capability for the real job, without accounts, feeds, or decorative complexity.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="studio section" id="studio">
        <div className="container studio-grid">
          <div><p className="section-number">03 / SHRPWARE</p><h2>Small studio.<br />Serious tools.</h2></div>
          <div className="studio-copy">
            <p>ShrpWare makes independent software for desktop workflows that deserve a sharper answer.</p>
            <p className="studio-note">Two focused apps. More useful edges to come.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <Brand href="#top" />
          <p>© 2026 ShrpWare</p>
          <div className="footer-links"><a href="/apps/waveplume">WavePlume</a><a href="/apps/deltatxt">DeltaTxt</a></div>
        </div>
      </footer>
    </main>
  );
}
