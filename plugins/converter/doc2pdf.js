const libre = require("libreoffice-convert");
const fs = require("fs");

module.exports = {
  name: "doc2pdf",
  desc: "Convert DOC/DOCX to PDF",
  category: "converter",
  usage: "doc2pdf (reply to doc file)",
  react: "📘",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a DOC file!");
    const output = await new Promise((res, rej) =>
      libre.convert(media, ".pdf", undefined, (err, done) => err ? rej(err) : res(done))
    );
    const path = `doc_${Date.now()}.pdf`;
    fs.writeFileSync(path, output);
    sendFile(m.from, path, "file.pdf", m);
  }
};