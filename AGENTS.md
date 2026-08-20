# ShrpWare website agent notes

Read [`SITE-HANDOFF.md`](SITE-HANDOFF.md) before changing or publishing the site. It is the source of truth for architecture, release links, validation, deployment, and rollback.

This public repository is the source of truth for [shrpware.com](https://shrpware.com). Work on a branch and open a pull request. A merge to `main` runs the production Cloudflare deployment workflow automatically.

## Non-negotiable project rules

- Production is the Cloudflare Worker `shrpware-site`. It is not a Pages project and does not use a Cloudflare Tunnel for production updates.
- Do not edit or publish the archived OpenAI Sites project. It no longer controls `shrpware.com`.
- Use `SafeLink` or a native `<a>` for links. Do not replace them with `next/link`; vinext client-side link interception previously caused valid links to stop navigating.
- Keep outbound product links behind `/go/[slug]` and define their destinations and release gates in `app/lib/site.ts`.
- Preserve the Worker-level `/privacy.html` redirect. App Store Connect has that legacy URL on file for the live WavePlume app.
- Only product-page screenshot sections use `ScreenshotGallery`. Hero, homepage, and use-case artwork stays static unless the product direction changes.
- Never publish an installer until its Authenticode signature and clean-machine behavior have been verified. Prefer versioned download filenames instead of overwriting a live object.
- Do not commit `.env*`, Wrangler state, build output, credentials, or unsigned installer binaries.
- Never change Cloudflare DNS or mail records as part of site work. The zone also carries the records for `support@shrpware.com`.
- Never invent prices, release dates, product capabilities, destinations, or platform support.
- Preserve unrelated work. Inspect `git status` and stage explicit paths only.

## Required checks

```powershell
npm ci
npm test
npm run lint
```

For local work, use `npm run dev` and open `http://localhost:3000`. Do not push directly to `main`. Publishing, manual recovery, and rollback instructions are in [`SITE-HANDOFF.md`](SITE-HANDOFF.md).
