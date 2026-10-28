from __future__ import annotations

import re
import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Italic", str(FONT_DIR / "Arial Italic.ttf")))

INK = colors.HexColor("#18181B")
MUTED = colors.HexColor("#52525B")
ACCENT = colors.HexColor("#2563EB")
RULE = colors.HexColor("#D4D4D8")


def inline_markup(text: str) -> str:
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    text = re.sub(r"\[([^]]+)]\((https?://[^)]+)\)", r'<a href="\2" color="#2563EB">\1</a>', text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"_([^_]+)_", r"<i>\1</i>", text)
    return text


def styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Arial-Bold",
            fontSize=24,
            leading=28,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=3,
        ),
        "tagline": ParagraphStyle(
            "Tagline",
            parent=base["Normal"],
            fontName="Arial-Bold",
            fontSize=9.5,
            leading=12,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Arial",
            fontSize=8,
            leading=10,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "h2": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Arial-Bold",
            fontSize=11,
            leading=13,
            textColor=INK,
            spaceBefore=8,
            spaceAfter=4,
            keepWithNext=True,
        ),
        "h3": ParagraphStyle(
            "Entry",
            parent=base["Heading3"],
            fontName="Arial-Bold",
            fontSize=9.2,
            leading=11.5,
            textColor=INK,
            spaceBefore=4.5,
            spaceAfter=1.5,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=8.4,
            leading=11,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=3,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["BodyText"],
            fontName="Arial-Italic",
            fontSize=8.1,
            leading=10,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=8.2,
            leading=10.5,
            textColor=INK,
            leftIndent=9,
            firstLineIndent=-6,
            bulletIndent=2,
            spaceAfter=1.5,
        ),
    }


def footer(canvas, doc) -> None:
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.line(18 * mm, 13 * mm, A4[0] - 18 * mm, 13 * mm)
    canvas.setFont("Arial", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8.5 * mm, "Adrien Lachambre · adrienlachambre.com")
    canvas.drawRightString(A4[0] - 18 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_resume(source: Path, destination: Path) -> None:
    style = styles()
    frame = Frame(18 * mm, 17 * mm, A4[0] - 36 * mm, A4[1] - 30 * mm, id="resume")
    template = PageTemplate(id="resume", frames=[frame], onPage=footer)
    document = BaseDocTemplate(
        str(destination),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=13 * mm,
        bottomMargin=17 * mm,
        title="Adrien Lachambre — Resume",
        author="Adrien Lachambre",
    )
    document.addPageTemplates([template])

    story = []
    lines = source.read_text(encoding="utf-8").splitlines()
    nonempty_index = 0
    current_section = ""

    for raw in lines:
        line = raw.strip()
        if not line:
            continue

        if line.startswith("# "):
            story.append(Paragraph(inline_markup(line[2:]), style["name"]))
        elif line.startswith("## "):
            section = line[3:]
            if section in {"Projets", "Projects"}:
                story.append(PageBreak())
            current_section = section
            story.append(Paragraph(inline_markup(section.upper()), style["h2"]))
            story.append(HRFlowable(width="100%", thickness=0.7, color=RULE, spaceAfter=1.5))
        elif line.startswith("### "):
            story.append(Paragraph(inline_markup(line[4:]), style["h3"]))
        elif line.startswith("- "):
            story.append(Paragraph(inline_markup(line[2:]), style["bullet"], bulletText="•"))
        elif line.startswith("_") and line.endswith("_"):
            target = "tagline" if nonempty_index == 1 else "meta"
            story.append(Paragraph(inline_markup(line), style[target]))
        elif nonempty_index in {2, 3}:
            story.append(Paragraph(inline_markup(line), style["contact"]))
            if nonempty_index == 3:
                story.append(Spacer(1, 3 * mm))
        else:
            paragraph_style = style["meta"] if " · " in line and current_section in {"Projets", "Projects"} else style["body"]
            story.append(Paragraph(inline_markup(line), paragraph_style))

        nonempty_index += 1

    document.build(story)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    outputs = {
        ROOT / "resume" / "Adrien-Lachambre-Resume.fr.md": "adrien-lachambre-cv-fr.pdf",
        ROOT / "resume" / "Adrien-Lachambre-Resume.en.md": "adrien-lachambre-resume-en.pdf",
    }
    for source, filename in outputs.items():
        destination = OUTPUT_DIR / filename
        build_resume(source, destination)
        shutil.copy2(destination, PUBLIC_DIR / filename)
        if filename == "adrien-lachambre-resume-en.pdf":
            shutil.copy2(destination, PUBLIC_DIR / "adrien-lachambre-resume.pdf")


if __name__ == "__main__":
    main()
