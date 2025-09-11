module.exports = {
  name: "tovideo",
  desc: "Convert sticker/gif to video",
  category: "converter",
  usage: "tovideo (reply to sticker/gif)",
  react: "🎬",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a sticker/gif!");
    await sendFile(m.from, media, "video.mp4", m, { asVideo: true });
  }
};
