const pdf2img = require("pdf-img-convert");
const fs = require("fs");

module.exports = {
  name: "pdf2img",
  desc: "Convert PDF pages to images",
  category: "converter",
  usage: "pdf2img (reply to PDF)",
  react: "📖",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a PDF!");
    const pages = await pdf2img.convert(media);
    for (let i = 0; i < pages.length; i++) {
      const path = `page_${i + 1}.png`;
      fs.writeFileSync(path, pages[i]);
      await sendFile(m.from, path, path, m);
    }
  }
};
