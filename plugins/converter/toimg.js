module.exports = {
  name: "toimg",
  desc: "Convert sticker to image",
  category: "converter",
  usage: "toimg (reply to sticker)",
  react: "🖼️",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a sticker!");
    await sendFile(m.from, media, "sticker.png", m, { asSticker: false });
  }
};
