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
            <a className="stack-card stack-wave" href="/apps/wavequill">
              <img src="/apps/wavequill/icon.png" alt="WaveQuill app icon" />
              <div><span>01 / RECORD + TRANSCRIBE</span><strong>WaveQuill</strong></div>
              <b>↗</b>
            </a>
            <a className="stack-card stack-delta" href="/apps/deltatxt">
              <img src="/apps/deltatxt/icon.png" alt="DeltaTxt app icon" />
              <div><span>02 / EDIT + COMPARE</span><strong>DeltaTxt</strong></div>
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
                <img className="product-icon" src="/apps/wavequill/icon.png" alt="WaveQuill icon" />
                <div><p className="product-index">APP / 01</p><h3>WaveQuill</h3></div>
              </div>
              <p className="product-tagline">Every wave becomes a word.</p>
              <p className="product-description">
                Record meetings and turn them into searchable transcripts on your own computer.
                No bot joins. Your recordings and transcripts stay with you.
              </p>
              <ul className="feature-chips" aria-label="WaveQuill highlights">
                <li>Local transcription</li><li>Mac + Windows</li><li>No account</li>
              </ul>
              <a className="text-link" href="/apps/wavequill">Explore WaveQuill <span>→</span></a>
            </div>
            <a className="product-media wave-media" href="/apps/wavequill" aria-label="View WaveQuill">
              <img src="/apps/wavequill/transcript.jpg" alt="WaveQuill locally generated meeting transcript" />
              <span className="media-label">PRIVATE MEETING RECORDER</span>
            </a>
          </article>

          <article className="product-row delta-row">
            <div className="product-copy">
              <div className="product-title-line">
                <img className="product-icon" src="/apps/deltatxt/icon.png" alt="DeltaTxt icon" />
                <div><p className="product-index">APP / 02</p><h3>DeltaTxt</h3></div>
              </div>
              <p className="product-tagline">Change, clearly.</p>
              <p className="product-description">
                A lightweight native editor for source code, very large logs, file comparison,
                merge work, and practical Python troubleshooting.
              </p>
              <ul className="feature-chips" aria-label="DeltaTxt highlights">
                <li>Large-file tools</li><li>Compare + merge</li><li>Python debug</li>
              </ul>
              <a className="text-link" href="/apps/deltatxt">Explore DeltaTxt <span>→</span></a>
            </div>
            <a className="product-media delta-media" href="/apps/deltatxt" aria-label="View DeltaTxt">
              <div className="code-window" aria-hidden="true">
                <div className="code-top"><span /><span /><span /><b>release-notes.md — DeltaTxt</b></div>
                <div className="code-body">
                  <ol><li><i>const</i> change = <em>compare</em>(left, right);</li><li></li><li><i>if</i> (change.isClear) &#123;</li><li className="added">+ shipWithConfidence();</li><li className="removed">- guessWhatChanged();</li><li>&#125;</li></ol>
                  <div className="code-map"><span /><span /><span /><span /><span /><span /></div>
                </div>
                <div className="code-status"><span>UTF-8</span><span>LF</span><span>Python 3.12</span></div>
              </div>
              <span className="media-label">EDITOR + DIFF WORKBENCH</span>
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
            <p className="studio-note">Two apps in development. More useful edges to come.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <Brand href="#top" />
          <p>© 2026 ShrpWare</p>
          <div className="footer-links"><a href="/apps/wavequill">WaveQuill</a><a href="/apps/deltatxt">DeltaTxt</a></div>
        </div>
      </footer>
    </main>
  );
}
