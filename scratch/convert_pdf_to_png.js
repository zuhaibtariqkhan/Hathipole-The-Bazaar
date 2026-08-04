const pdf2img = require('pdf-img-convert');
const fs = require('fs');
const path = require('path');

async function convert() {
  const pdfPath = path.join(__dirname, '..', 'public', 'HATHIPOLE LOGO.pdf');
  const outputPng = path.join(__dirname, '..', 'public', 'hathipole-logo.png');

  console.log(`Converting ${pdfPath} to PNG...`);
  const outputImages = await pdf2img.convert(pdfPath, { width: 1200 });

  fs.writeFileSync(outputPng, outputImages[0]);
  console.log(`Successfully written PNG logo to ${outputPng}`);
}

convert().catch((err) => {
  console.error("Error converting PDF:", err);
});
