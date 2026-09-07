# WavePlume Windows screenshots — September 6, 2026

Four 1920 × 1080 RGB PNGs for the Microsoft Store desktop listing:

1. `01-record-1920x1080.png` — Record on your terms.
2. `02-transcript-1920x1080.png` — Find the words you need.
3. `03-library-1920x1080.png` — Keep your meetings together.
4. `04-edit-1920x1080.png` — Make the transcript yours.

These are fresh captures of the real Windows WPF window compiled from WavePlume commit `ed65b13bd73ad418ccc60babf673ce390492c985`, using Microsoft Store feature flags (`UrlImport=false`, `Gpu=false`, no trial gate). An isolated capture harness supplied fictional transcript files and preferences. No production UI was altered; no personal meeting content or personal account paths appear. The library example contains transcript-only sessions, so media actions are correctly disabled.

The images show the corrected source build, not the older published MSIX. Use them with the corresponding new Windows submission. They are not Mac App Store screenshots. Capturing these images does not validate recording, inference, or Store certification.

Original 1426 × 893 app-window PNGs are in `marketing/store-assets/waveplume/2026-09-06`. Rebuild the framing and website WebPs from the repository root with Python and Pillow:

```powershell
python marketing/build-waveplume-assets-20260906.py
```

The script preserves the entire app window and its aspect ratio. Only the surrounding presentation, captions, and image encoding are generated. The website uses 1920 × 1080 WebPs, 640 × 360 thumbnails, and an unframed transcript hero.

Partner Center upload has not been performed. Upload these four PNGs in order to the Windows desktop screenshot section of the matching submission. Keep existing language-specific assets until replacements for those languages are available.

Refreshed September 7, 2026: all four views are exported directly from the same application's WPF visuals, with its actual window background. Native title-bar chrome and capture-tool cursor overlays are omitted. No interface content was retouched.
