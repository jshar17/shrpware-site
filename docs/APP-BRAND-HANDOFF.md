# ShrpWare app brand handoff

## Purpose

Use this guide when adding ShrpWare publisher branding to WaveQuill or
DeltaTxt. The goal is to make the apps visibly part of one studio while keeping
each product recognizable on its own.

## Source of truth

Use the assets in `public/brand/`:

| Asset | Intended use |
| --- | --- |
| `shrpware-wordmark.svg` | Full wordmark on dark backgrounds |
| `shrpware-wordmark-dark.svg` | Full wordmark on light backgrounds |
| `shrpware-mark.svg` | Angular S on its graphite field; avatars and compact publisher marks |
| `shrpware-mark-transparent.svg` | Acid-green Angular S when the background is already controlled |
| `../favicon.svg` | Website/browser use only |

`public/og.png` is the ShrpWare link-sharing card. It is not an app icon or
splash screen.

## Identity rules

- Company name in prose: **ShrpWare**
- Full display wordmark: **SHRPWARE** followed by an oversized Angular S
- Symbol name: **Angular S**
- Tagline: **Apps with an edge.**
- Canonical website: `https://shrpware.com`
- Retired treatment: `SHRP#`
- Do not mention Hurst, Texas in product UI or public marketing.

Keep clear space around the Angular S equal to roughly one quarter of its
width. Do not stretch, rotate, outline, recolor individual sections, or rebuild
the mark from text characters.

## How to use it in the apps

Good placements include:

- About window: “WaveQuill by ShrpWare” or “DeltaTxt by ShrpWare”
- Publisher wordmark beneath the product name
- Help or About link to `https://shrpware.com`
- Installer/publisher artwork where platform guidelines allow it
- Store listing publisher graphics and support links

Do not replace the WaveQuill or DeltaTxt app icon with the Angular S. Do not
make the studio mark larger than the product name in primary app screens.

## Platform notes

For Windows UI, keep the SVG as the master and export only the PNG sizes the
framework or installer actually requires. Verify appearance at 100%, 150%, and
200% display scaling.

For macOS, keep the SVG as the master and place an appropriate vector PDF or
high-resolution PNG export in the asset catalog. Verify light and dark
appearances and do not apply an additional mask to the transparent mark.

## Current public product positioning

WaveQuill is presented as private local meeting recording and transcription
for macOS and Windows. It is in development. DeltaTxt is presented as a native
editor for code, large logs, comparison, merge, and script troubleshooting;
its Windows edition is ahead of the active macOS preview.

Do not add purchase buttons, prices, release dates, or download URLs until the
owner provides them.

## Completion checklist

- The product icon remains unchanged.
- The correct light/dark ShrpWare asset is used.
- The wordmark is legible at the final rendered size.
- Accessible text identifies ShrpWare where the logo is interactive.
- `https://shrpware.com` is the publisher link.
- No `SHRP#` or location copy remains.
- New raster exports are derived from the checked-in SVG master.
