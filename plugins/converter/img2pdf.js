const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = {
  name: "img2pdf",
  desc: "Convert multiple images to one PDF",
  category: "converter",
  usage: "img2pdf (reply multiple images)",
  react: "📑",
  start: async (m, { quoted, sendFile }) => {
    if (!quoted) return m.reply("⚠️ Reply to multiple images!");
    const doc = new PDFDocument();
    const out = `multi_${Date.now()}.pdf`;
    doc.pipe(fs.createWriteStream(out));
    for (const img of quoted) doc.image(img, { fit: [500, 500] }).addPage();
    doc.end();
    sendFile(m.from, out, "images.pdf", m);
  }
};
-