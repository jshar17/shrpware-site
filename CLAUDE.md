# Claude project instructions

This repository is the source of truth for the ShrpWare company identity and
public product descriptions.

Before changing the website or carrying assets into WavePlume or DeltaTxt:

1. Read `brand/README.md` for identity rules.
2. Read `docs/APP-BRAND-HANDOFF.md` for app-integration guidance.
3. Reuse the SVG files under `public/brand/`; do not redraw the Angular S.
4. Keep the WavePlume and DeltaTxt icons as product identities. The Angular S
   represents the publisher, not an individual app.
5. Do not restore `SHRP#`, add Hurst/Texas copy, or invent pricing, downloads,
   release dates, platform support, or product capabilities.

For website work, preserve the current Vinext architecture. Run `npm test` before
handing changes back. The production site runs as a Cloudflare Worker and deploys
automatically when `main` is merged — see `AGENTS.md`.

When updating an app repository, copy only the needed brand assets and record
their source and date in that repository. Prefer a small About-screen or
publisher-credit integration over replacing established product artwork.
