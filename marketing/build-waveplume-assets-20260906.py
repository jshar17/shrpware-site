"""Frame authentic Windows UI captures; never redraw or retouch the app content.

Run with Pillow installed. Pass the folder containing the four raw PNG captures.
The output includes Partner Center PNGs and optimized website WebPs/thumbnails.
"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "marketing/store-assets/waveplume/2026-09-06"
STORE = ROOT / "marketing/store-submission/waveplume/2026-09-06"
GALLERY = ROOT / "public/apps/waveplume/gallery"
STORE.mkdir(parents=True, exist_ok=True)
GALLERY.mkdir(parents=True, exist_ok=True)
font = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", size)
regular = lambda size: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", size)
shots = [
    ("01-record-setup.png", "record", "Record on your terms.", "Choose your audio, pick a preset, and keep the recording on your PC."),
    ("02-transcript.png", "transcript", "Find the words you need.", "Local Whisper transcription, searchable text, and timestamps you can revisit."),
    ("03-session-library.png", "library", "Keep your meetings together.", "Browse your session library and keep transcripts in folders you control."),
    ("04-edit-transcript.png", "edit", "Make the transcript yours.", "Correct misheard words, save your changes, and export a text copy."),
]
for index, (filename, slug, title, subtitle) in enumerate(shots, 1):
    shot = Image.open(SOURCE / filename).convert("RGB")
    canvas = Image.new("RGB", (1920, 1080), "#0b100f")
    draw = ImageDraw.Draw(canvas)
    draw.text((88, 28), "WAVEPLUME / WINDOWS", font=font(18), fill="#b7ff18")
    draw.text((88, 57), title, font=font(50), fill="#f5f7f4")
    draw.text((90, 125), subtitle, font=regular(25), fill="#a9b4af")
    draw.text((1740, 62), f"0{index}", font=font(42), fill="#4d88f7")
    panel = ImageOps.contain(shot, (1680, 856), Image.Resampling.LANCZOS)
    x, y = (1920-panel.width)//2, 199
    draw.rounded_rectangle((x-2, y-2, x+panel.width+2, y+panel.height+2), radius=8, fill="#3d5263")
    canvas.paste(panel, (x, y))
    canvas.save(STORE / f"0{index}-{slug}-1920x1080.png", optimize=True)
    canvas.save(GALLERY / f"windows-{slug}-20260907.webp", quality=91, method=6)
    canvas.resize((640,360), Image.Resampling.LANCZOS).save(GALLERY / f"windows-{slug}-20260907-thumb.webp", quality=85, method=6)
    print(f"{slug}: {shot.size} -> 1920x1080")
Image.open(SOURCE / "02-transcript.png").convert("RGB").save(ROOT / "public/apps/waveplume/hero-windows-transcript-20260907.webp", quality=94, method=6)
