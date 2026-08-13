# Agent guide — shrpware-site

This is the **public** source for [shrpware.com](https://shrpware.com). Vinext + Vite,
running as a **Cloudflare Worker in Joe's own Cloudflare account**.

**This repository is the source of truth for the live site.** Merging to `main`
deploys. There is no separate publish step and no other place to edit.

## How to change the site

1. Branch from `main`.
2. Edit the files (see *Where things live*).
3. `npm ci && npm test` — this builds and runs the rendered-HTML assertions.
4. Open a PR. CI runs the same `npm test` on every PR.
5. Merge to `main`. `.github/workflows/deploy.yml` builds, tests, and deploys to
   Cloudflare Workers. Live in roughly 45 seconds.
6. Verify on https://shrpware.com — not just the preview.

```bash
npm ci          # Node 22.13+
npm run dev     # local dev server
npm test        # build + assertions (run before every PR)
npm run build   # build only
npm run deploy  # build + deploy by hand; CI normally does this
```

## Do not use ChatGPT Sites

The site used to be hosted on **OpenAI Sites** and edited by prompting ChatGPT.
**That is over.** On 2026-08-13 it moved to Cloudflare Workers, and the Sites
project was archived, renamed `ARCHIVED - do not edit - site now on Cloudflare`,
stripped of its custom domains, and set private.

Editing there now changes nothing on shrpware.com. It previously drifted about
twelve days ahead of this repo without anyone noticing, which is the failure this
setup exists to prevent. If someone asks you to "update the site in ChatGPT",
point them here instead.

## Where things live

| What | Where |
|---|---|
| Homepage | `app/page.tsx` |
| Product pages | `app/apps/<app>/page.tsx` |
| Privacy / support pages | `app/apps/<app>/privacy/page.tsx`, `.../support/page.tsx` |
| Product tour gallery | `app/apps/waveplume/WavePlumeGallery.tsx` |
| Site metadata, OG tags | `app/layout.tsx` |
| Styles | `app/globals.css` |
| Routing, redirects | `worker/index.ts` |
| SEO routes | `app/robots.ts`, `app/sitemap.ts` |
| Images | `public/apps/<app>/` |
| Brand SVGs | `public/brand/` — reuse, never redraw |
| Tests | `tests/rendered-html.test.mjs` |

## Rules

- **This repo is public.** Never commit secrets, API tokens, `.env` files, or the
  private ops docs.
- **Update the tests when you change user-facing copy.** `tests/rendered-html.test.mjs`
  asserts on specific strings. A copy change that ignores them turns CI red — and
  worse, a copy change that ships without CI running them has already happened
  once (the Mac App Store launch broke two assertions unnoticed, because CI was
  build-only at the time).
- **Never invent product facts.** No prices, release dates, download URLs,
  platform support, or capabilities that the owner has not given you. See
  `CLAUDE.md`.
- **Never touch DNS or email.** The Cloudflare zone carries iCloud mail records
  (MX ×2, DKIM at `sig1._domainkey`, SPF, `apple-domain`). Breaking them breaks
  `support@shrpware.com`. See `jshar17/shrpware-operations` →
  `docs/SHRPWARE_DOMAIN_RUNBOOK.md`.
- The support address is `support@shrpware.com`.

## Two things that look wrong but are deliberate

**`package.json` wraps the npm scripts in `cross-env`.** The old OpenAI Sites
copy used bare `VAR=value` prefixes, which only work in a POSIX shell. Do not
"simplify" them back — it breaks Windows and the CI runner.

**`/privacy.html` redirects to `/apps/waveplume/privacy`** in `worker/index.ts`.
This is **load-bearing for App Store review**. App Store Connect has the old
`/privacy.html` URL on file, and that field is read-only without shipping a whole
new app version. Deleting the redirect gives Apple a 404 on the privacy policy of
a live app. There is a test covering it; leave both in place.

## Leftovers from the old host

`.openai/hosting.json` and `build/sites-vite-plugin.ts` are inert — the plugin
just copies that file into `dist/` and nothing reads it now. Harmless to keep,
safe to remove if you are tidying, but removing them is not required and is not
an improvement worth a PR on its own.

## Deploy configuration

There is no hand-written `wrangler.toml`. `@cloudflare/vite-plugin` generates
`dist/server/wrangler.json` at build time with the worker entry, the
`dist/client` assets directory, and **no bindings at all** — no D1, R2, KV, or
Durable Objects. If a build ever starts requesting a binding, something has been
added that the deploy will not have.

Deploying needs the `CLOUDFLARE_API_TOKEN` repository secret. If a deploy fails
with an auth error, that token has expired or been revoked; the owner regenerates
it from the "Edit Cloudflare Workers" template.
