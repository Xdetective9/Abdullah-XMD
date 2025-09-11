module.exports = {
  name: "togif",
  desc: "Convert sticker to GIF",
  category: "converter",
  usage: "togif (reply to sticker)",
  react: "🎞️",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a sticker!");
    await sendFile(m.from, media, "anim.gif", m, { asGif: true });
  }
};
