import sys
import os

pdf_path = os.path.join("public", "HATHIPOLE LOGO.pdf")
output_png = os.path.join("public", "hathipole-logo.png")

print(f"Reading {pdf_path}...")

try:
    import fitz # PyMuPDF
    doc = fitz.open(pdf_path)
    page = doc[0]
    pix = page.get_pixmap(dpi=300)
    pix.save(output_png)
    print(f"Successfully converted PDF logo to {output_png} using PyMuPDF!")
    sys.exit(0)
except Exception as e:
    print(f"PyMuPDF error: {e}")

try:
    from pdf2image import convert_from_path
    images = convert_from_path(pdf_path)
    if images:
        images[0].save(output_png, 'PNG')
        print(f"Successfully converted PDF logo to {output_png} using pdf2image!")
        sys.exit(0)
except Exception as e:
    print(f"pdf2image error: {e}")

try:
    import pypdfium2 as pdfium
    pdf = pdfium.PdfDocument(pdf_path)
    page = pdf[0]
    image = page.render(scale=3).to_pil()
    image.save(output_png)
    print(f"Successfully converted PDF logo to {output_png} using pypdfium2!")
    sys.exit(0)
except Exception as e:
    print(f"pdfium error: {e}")
