const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = {
  name: "topdf",
  desc: "Convert image to PDF",
  category: "converter",
  usage: "topdf (reply to image)",
  react: "📄",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to an image!");
    const doc = new PDFDocument();
    const out = `doc_${Date.now()}.pdf`;
    doc.pipe(fs.createWriteStream(out));
    doc.image(media, 10, 10, { fit: [500, 500] });
    doc.end();
    sendFile(m.from, out, "file.pdf", m);
  }
};
