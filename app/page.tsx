export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="ShrpWare home">
            <span>SHRP</span>
            <span className="brand-mark">#</span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#apps">Apps</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Independent software studio · Hurst, Texas
            </p>
            <h1>
              Apps with
              <br />
              <span>an edge.</span>
            </h1>
            <p className="hero-text">
              ShrpWare makes focused software for Windows, macOS, and mobile.
              Small tools, thoughtful details, and no unnecessary clutter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#apps">
                See what’s coming
                <span aria-hidden="true">↘</span>
              </a>
              <a className="button button-secondary" href="#about">
                Meet ShrpWare
              </a>
            </div>
          </div>

          <div className="hero-console" aria-label="ShrpWare product preview">
            <div className="console-bar">
              <span>SHRPWARE / BUILD_001</span>
              <span className="console-live">IN PROGRESS</span>
            </div>
            <div className="console-stage">
              <div className="edge-shape">
                <span className="edge-hash">#</span>
              </div>
              <div className="console-readout">
                <span>PLATFORMS</span>
                <strong>03</strong>
              </div>
              <div className="console-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="console-footer">
              <span>WINDOWS</span>
              <span>MACOS</span>
              <span>MOBILE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="apps section" id="apps">
        <div className="container">
          <div className="section-heading">
            <p className="section-number">01 / THE WORK</p>
            <h2>Useful by design.</h2>
            <p>
              The first ShrpWare releases are taking shape. Each one starts with
              a real need and earns every feature.
            </p>
          </div>

          <div className="app-grid">
            <article className="app-card app-card-featured">
              <div className="card-topline">
                <span className="card-index">01</span>
                <span className="pill">Coming soon</span>
              </div>
              <div className="card-symbol" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div>
                <p className="card-kicker">Desktop utilities</p>
                <h3>Sharper everyday tools.</h3>
                <p>
                  Purpose-built Windows and Mac apps that turn repetitive work
                  into a clean, quick flow.
                </p>
              </div>
            </article>

            <article className="app-card">
              <div className="card-topline">
                <span className="card-index">02</span>
                <span className="pill pill-muted">Exploring</span>
              </div>
              <div>
                <p className="card-kicker">Mobile experiments</p>
                <h3>Small apps that belong in your pocket.</h3>
                <p>
                  Focused ideas for iPhone and Android, designed to do one job
                  exceptionally well.
                </p>
              </div>
              <div className="card-platforms" aria-label="Mobile platforms">
                <span>iOS</span>
                <span>Android</span>
              </div>
            </article>

            <article className="app-card">
              <div className="card-topline">
                <span className="card-index">03</span>
                <span className="pill pill-muted">Always open</span>
              </div>
              <div>
                <p className="card-kicker">Odd little problems</p>
                <h3>Ideas too useful to ignore.</h3>
                <p>
                  Hobbyist projects, clever helpers, and practical utilities
                  that deserve a polished home.
                </p>
              </div>
              <div className="card-signal" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="container">
          <p className="section-number">02 / THE STANDARD</p>
          <div className="approach-grid">
            <h2>Less noise.<br />More signal.</h2>
            <div className="principles">
              <article>
                <span>01</span>
                <div>
                  <h3>Clear purpose</h3>
                  <p>Every app should solve a problem you can explain in one sentence.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Native feel</h3>
                  <p>Software should feel at home on the device where you use it.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Made to last</h3>
                  <p>Simple foundations, careful details, and steady improvement.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid">
          <div>
            <p className="section-number">03 / ABOUT</p>
            <h2>Independent ideas,<br />built in Texas.</h2>
          </div>
          <div className="about-copy">
            <p>
              ShrpWare is a small independent software studio in Hurst, Texas,
              creating useful apps across desktop and mobile.
            </p>
            <p className="about-note">
              First releases are in development. This is the beginning.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#top" aria-label="Back to top">
            <span>SHRP</span>
            <span className="brand-mark">#</span>
          </a>
          <p>© 2026 ShrpWare · Hurst, Texas</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
