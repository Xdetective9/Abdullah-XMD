// plugins/tools/sticker.js
module.exports = {
  name: "sticker",
  alias: ["s"],
  desc: "Convert image/video to sticker",
  category: "tools",
  usage: "sticker <reply image/video>",
  react: "🎴",
  start: async (m, { quoted, sendSticker }) => {
    if (!quoted) return m.reply("⚠️ Reply to an image/video.");
    try {
      const media = await m.quoted.download();
      await sendSticker(m.from, media, m, { pack: "Abdullah-XMD", author: "Xdetective" });
    } catch {
      m.reply("❌ Failed to make sticker.");
    }
  },
};
