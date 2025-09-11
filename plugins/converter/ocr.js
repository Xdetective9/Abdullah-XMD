const tesseract = require("node-tesseract-ocr");

module.exports = {
  name: "ocr",
  desc: "Extract text from image",
  category: "converter",
  usage: "ocr (reply to image)",
  react: "🔍",
  start: async (m, { media }) => {
    if (!media) return m.reply("⚠️ Reply to an image!");
    const text = await tesseract.recognize(media);
    m.reply("📝 Extracted: " + text);
  }
};
