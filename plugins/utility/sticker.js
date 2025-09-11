const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

module.exports = {
  name: "sticker",
  alias: ["s", "st"],
  desc: "Convert image/video to sticker",
  category: "utility",
  usage: "sticker (reply image/video)",
  react: "✨",
  start: async (m, { quoted, mime, downloadMediaMessage, sendFile }) => {
    if (!quoted) return m.reply("⚠️ Reply to an image/video.");
    const buffer = await downloadMediaMessage(quoted);
    const sticker = new Sticker(buffer, {
      pack: "XDetective",
      author: "Utility",
      type: StickerTypes.FULL,
    });
    await sendFile(m.from, await sticker.toBuffer(), "sticker.webp", m);
  }
};
