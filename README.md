# ShrpWare website

Source for [shrpware.com](https://shrpware.com), the ShrpWare software studio
site and product home for WavePlume and DeltaTxt.

## Current brand

- Company: **ShrpWare**
- Symbol: **Angular S**
- Tagline: **Apps with an edge.**
- Palette: graphite, paper, and acid green
- Brand assets: [`public/brand/`](public/brand/)
- Usage rules: [`brand/README.md`](brand/README.md)

The old `SHRP#` treatment is retired. Product icons remain distinct from the
ShrpWare company mark.

## Products

- **WavePlume** — private local meeting recording and transcription for macOS
  and Windows
- **DeltaTxt** — a native editor for code, large logs, comparison, merge, and
  practical script troubleshooting

Product copy and release status live in `app/apps/`. Do not invent prices,
download links, availability dates, or supported capabilities.

## Development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
npm run build
```

The project uses Vinext and is hosted by OpenAI Sites. Preserve
`.openai/hosting.json`; GitHub Pages is not the production host.

## Assistant editing workflow

Claude, Codex, and local developers can edit this repository through the normal
Git workflow; no ChatGPT-only shell or OpenAI Sites editor is required for source
changes. Read [`CLAUDE.md`](CLAUDE.md) or [`AGENTS.md`](AGENTS.md) before editing,
and read [`docs/APP-BRAND-HANDOFF.md`](docs/APP-BRAND-HANDOFF.md) before applying
the ShrpWare identity to either app.

When Node.js is available, validate with `npm ci` and `npm run build`. When it is
not, open a draft pull request and wait for the repository's GitHub Actions build
to pass. Publishing the validated source to the live site remains a separate,
owner-approved OpenAI Sites step.
