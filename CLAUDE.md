# Claude project instructions

This repository is the **public** source of truth for the ShrpWare company identity and
public product descriptions (the shrpware.com website, on OpenAI Sites).

## Read the private runbook first

Before changing site content, styling, metadata, routes, images, or deploy configuration,
read the **private** operations repo `jshar17/shrpware-operations`:

- `docs/SHRPWARE_SITE_EDITING.md` — how to edit and publish the site. Start here.
- `docs/SHRPWARE_DOMAIN_RUNBOOK.md` — Cloudflare DNS and Apple iCloud+ email; don't touch for content work.

This repo is public: **never commit secrets, tokens, `.env` files, or the private ops docs here.**
**Publishing is a separate OpenAI Sites step that needs the owner's approval** — a GitHub merge
does not update the live site. Run `npm run build` (Node 22.13+) before a PR; CI builds every PR.

## Brand and content rules

Before changing the website or carrying assets into WavePlume or DeltaTxt:

1. Read `brand/README.md` for identity rules.
2. Read `docs/APP-BRAND-HANDOFF.md` for app-integration guidance.
3. Reuse the SVG files under `public/brand/`; do not redraw the Angular S.
4. Keep the WavePlume and DeltaTxt icons as product identities. The Angular S
   represents the publisher, not an individual app.
5. Do not restore `SHRP#`, add Hurst/Texas copy, or invent pricing, downloads,
   release dates, platform support, or product capabilities.

For website work, preserve the current Vinext architecture and
`.openai/hosting.json`. Run `npm run build` before handing changes back. The
production site is hosted by OpenAI Sites, not GitHub Pages.

When updating an app repository, copy only the needed brand assets and record
their source and date in that repository. Prefer a small About-screen or
publisher-credit integration over replacing established product artwork.
