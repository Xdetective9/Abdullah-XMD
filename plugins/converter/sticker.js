const { writeFile } = require("fs");
const { Sticker } = require("wa-sticker-formatter");

module.exports = {
  name: "sticker",
  desc: "Convert image/video to sticker",
  category: "converter",
  usage: "sticker (reply to img/vid)",
  react: "✨",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to an image or video!");
    const sticker = new Sticker(media, { pack: "Abdullah-XMD", author: "Bot" });
    const buf = await sticker.toBuffer();
    const path = `st_${Date.now()}.webp`;
    writeFile(path, buf, () => sendFile(m.from, path, "sticker.webp", m));
  }
};
