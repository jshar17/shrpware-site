# WavePlume app asset handoff

## Decision

WavePlume is the product name. Use **WavePlume™** on the first prominent
marketing or store-listing mention; use **WavePlume** for normal in-app copy
after that. Do not use WaveQuill, a literal quill, or the retired waveform icon
in new UI, packaging, screenshots, or store artwork.

Tagline: **Every wave becomes a word.**

Publisher line: **WavePlume by ShrpWare™**

## Approved files

These files were staged in `public/apps/waveplume/` for handover to the apps
and removed in `de7527a` once the apps carried their own icons. The table is
kept because the sizes and intended uses still describe the approved artwork —
but look for the masters in the app repositories, not here.

| File (historical location) | Use |
| --- | --- |
| `icon.png` | Canonical website icon and high-resolution product icon |
| `hero-card.png` | 2048 × 768 wide hero card for welcome, marketing, and store graphics |
| `app-assets/waveplume-icon-master.png` | Master raster file; do not redraw it |
| `app-assets/png/` | 16, 32, 48, 64, 128, 256, 512, and 1024 px PNG exports |
| `app-assets/macOS/WavePlume.icns` | macOS packaged application icon |
| `app-assets/windows/WavePlume.ico` | Windows packaged application icon |

## Implementation instructions

### macOS

Use the app repository's own `Resources/AppIcon.icns`, or import a 1024 px
export into the Xcode `AppIcon` asset catalog.
Keep the artwork centered and do not add another rounded-square mask; the
platform applies its own treatment.

### Windows

Use the Windows app repository's own `.ico` as the executable and installer
icon. For in-app views, choose the PNG export closest to the rendered size
rather than scaling the 16 px image upward.

### Hero card

Use `hero-card.png` at a wide aspect ratio only. It is appropriate for a
welcome view, About screen, release page, or store feature graphic. Do not use
it as a square app icon or shrink it into a toolbar.

### Product icon rules

- The icon is an abstract plume merging into an audio wave.
- Keep the deep-navy background with cyan, teal, and ice-white artwork.
- Do not add the product name inside the square icon.
- Do not add a literal quill, pen, ink nib, handwriting, flying letters, or
  extra sparkle elements.
- Do not recolor it to ShrpWare acid green; ShrpWare is the publisher brand,
  while WavePlume has its own blue/cyan identity.

## Suggested placements

- App icon and installer: product icon only.
- Welcome or first-run screen: `hero-card.png` plus a clear privacy promise.
- About screen: product icon, `WavePlume by ShrpWare™`, and
  `https://shrpware.com`.
- Support and store pages: WavePlume™ on first headline use and the tagline
  exactly as written above.

## Acceptance checklist

- The packaged app uses its own `.icns` on macOS and `.ico` on Windows, both
  derived from the approved master.
- The app icon is recognizable at 32 px.
- No WaveQuill name or literal quill remains in new artwork or public copy.
- The hero card is only used in a wide presentation.
- The publisher attribution links to `https://shrpware.com`.
