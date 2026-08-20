# ShrpWare website instructions for Claude

Before changing this repository, read [`AGENTS.md`](AGENTS.md) and [`SITE-HANDOFF.md`](SITE-HANDOFF.md) in full. They are the current source of truth for the site's architecture, product facts, release gates, signed installers, validation, Git workflow, Cloudflare deployment, and rollback.

For publisher branding and product artwork — applying the ShrpWare identity inside WavePlume or DeltaTxt — read [`docs/APP-BRAND-HANDOFF.md`](docs/APP-BRAND-HANDOFF.md) and [`docs/WAVEPLUME-APP-HANDOFF.md`](docs/WAVEPLUME-APP-HANDOFF.md). Reuse the SVG under `public/brand/`; never redraw the Angular S.

Do not use the archived OpenAI Sites project, do not change DNS or mail records, and do not push directly to `main`. Preserve the `/privacy.html` App Store compatibility redirect and the native-link behavior described in the handoff.
