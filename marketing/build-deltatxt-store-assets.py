"""Build the DeltaTxt Microsoft Store screenshots.

The checked-in source crops contain only generic demo data. The finished images
use the same centered, high-contrast presentation as the WavePlume store set.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "marketing" / "store-assets" / "deltatxt"
GALLERY_DIR = ROOT / "public" / "apps" / "deltatxt" / "gallery"
STORE_SUBMISSION_DIR = ROOT / "marketing" / "store-submission" / "deltatxt"
BACKGROUND = ASSET_DIR / "background-v2.png"

WIDTH = 1920
HEIGHT = 1080

REGULAR_FONT_PATH = Path(r"C:\Windows\Fonts\segoeui.ttf")
SEMIBOLD_FONT_PATH = Path(r"C:\Windows\Fonts\segoeuib.ttf")
MONO_FONT_PATH = Path(r"C:\Windows\Fonts\consola.ttf")


SHOTS = (
    {
        "filename": "windows-code-without-overhead.webp",
        "source": "source-code-window.webp",
        "crop": (283, 391, 1637, 1044),
        "headline": "Edit code and text without the overhead.",
        "subhead": "Syntax-aware editing, folding, themes, and native Windows speed.",
        "panel_width": 1440,
        "panel_y": 356,
    },
    {
        "filename": "windows-compare-clearly.webp",
        "source": "source-compare-window.webp",
        "crop": (102, 474, 1818, 960),
        "headline": "See every change. Merge with confidence.",
        "subhead": "Review side by side, navigate differences, and apply the right result.",
        "panel_width": 1716,
        "panel_y": 454,
    },
    {
        "filename": "windows-search-workspace.webp",
        "source": "source-search-window.webp",
        "crop": (270, 391, 1650, 1044),
        "headline": "Search every file in seconds.",
        "subhead": "Scan code, configs, and logs with precise file, line, and column results.",
        "panel_width": 1460,
        "panel_y": 356,
        "sanitize_search_path": True,
    },
)


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size=size)


def centered_text(
    canvas: Image.Image,
    text: str,
    y: int,
    text_font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int, int],
    *,
    shadow: bool = False,
) -> None:
    draw = ImageDraw.Draw(canvas)
    bounds = draw.textbbox((0, 0), text, font=text_font)
    x = (WIDTH - (bounds[2] - bounds[0])) // 2
    if shadow:
        draw.text((x + 2, y + 4), text, font=text_font, fill=(0, 0, 0, 150))
    draw.text((x, y), text, font=text_font, fill=fill)


def sanitize_search_path(image: Image.Image) -> None:
    """Replace the source path with an unmistakably generic sample location."""
    draw = ImageDraw.Draw(image)
    draw.rectangle((338, 441, 847, 469), fill=(40, 44, 54))
    draw.text(
        (344, 442),
        r"C:\Samples\DeltaTxt-Demo",
        font=font(REGULAR_FONT_PATH, 16),
        fill=(199, 204, 215),
    )


def extract_source_crops() -> None:
    """Bootstrap reusable UI crops from the original marketing compositions."""
    for shot in SHOTS:
        source_path = ASSET_DIR / str(shot["source"])
        if source_path.exists():
            continue

        composed_path = GALLERY_DIR / str(shot["filename"])
        with Image.open(composed_path).convert("RGB") as original:
            if shot.get("sanitize_search_path"):
                sanitize_search_path(original)
            crop = original.crop(shot["crop"])
            crop.save(source_path, "WEBP", quality=96, method=6)


def place_window(
    canvas: Image.Image,
    source_path: Path,
    panel_width: int,
    panel_y: int,
) -> None:
    with Image.open(source_path).convert("RGBA") as panel:
        panel_height = round(panel.height * panel_width / panel.width)
        panel = panel.resize((panel_width, panel_height), Image.Resampling.LANCZOS)

    radius = 25
    panel_mask = Image.new("L", panel.size, 0)
    ImageDraw.Draw(panel_mask).rounded_rectangle(
        (0, 0, panel.width - 1, panel.height - 1), radius=radius, fill=255
    )
    panel.putalpha(panel_mask)

    x = (WIDTH - panel.width) // 2
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_mask = Image.new("L", canvas.size, 0)
    ImageDraw.Draw(shadow_mask).rounded_rectangle(
        (x - 5, panel_y + 5, x + panel.width + 5, panel_y + panel.height + 15),
        radius=radius + 6,
        fill=185,
    )
    shadow_mask = shadow_mask.filter(ImageFilter.GaussianBlur(30))
    shadow.putalpha(shadow_mask)
    canvas.alpha_composite(shadow)
    canvas.alpha_composite(panel, (x, panel_y))

    outline = ImageDraw.Draw(canvas)
    outline.rounded_rectangle(
        (x, panel_y, x + panel.width - 1, panel_y + panel.height - 1),
        radius=radius,
        outline=(112, 181, 255, 190),
        width=2,
    )


def build_shot(shot: dict[str, object]) -> None:
    with Image.open(BACKGROUND).convert("RGB") as background:
        canvas = ImageOps.fit(
            background,
            (WIDTH, HEIGHT),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        ).convert("RGBA")

    top_shade = Image.new("RGBA", (WIDTH, 360), (0, 0, 0, 0))
    shade = Image.new("L", (1, 360))
    shade.putdata([round(92 * (1 - y / 359)) for y in range(360)])
    shade = shade.resize((WIDTH, 360))
    top_shade.putalpha(shade)
    canvas.alpha_composite(top_shade, (0, 0))

    centered_text(
        canvas,
        str(shot["headline"]),
        82,
        font(SEMIBOLD_FONT_PATH, 76),
        (248, 250, 255, 255),
        shadow=True,
    )
    centered_text(
        canvas,
        str(shot["subhead"]),
        192,
        font(REGULAR_FONT_PATH, 35),
        (202, 211, 234, 255),
    )

    place_window(
        canvas,
        ASSET_DIR / str(shot["source"]),
        int(shot["panel_width"]),
        int(shot["panel_y"]),
    )

    destination = GALLERY_DIR / str(shot["filename"])
    canvas.convert("RGB").save(destination, "WEBP", quality=93, method=6)

    store_destination = STORE_SUBMISSION_DIR / f"{destination.stem}.png"
    canvas.convert("RGB").save(store_destination, "PNG", optimize=True)

    thumb_path = destination.with_name(f"{destination.stem}-thumb.webp")
    thumb = canvas.convert("RGB").resize((640, 360), Image.Resampling.LANCZOS)
    thumb.save(thumb_path, "WEBP", quality=88, method=6)


def main() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    GALLERY_DIR.mkdir(parents=True, exist_ok=True)
    STORE_SUBMISSION_DIR.mkdir(parents=True, exist_ok=True)
    extract_source_crops()
    for shot in SHOTS:
        build_shot(shot)


if __name__ == "__main__":
    main()
