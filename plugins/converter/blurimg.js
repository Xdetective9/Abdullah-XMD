const Jimp = require("jimp");

module.exports = {
  name: "blurimg",
  desc: "Blur an image",
  category: "converter",
  usage: "blurimg (reply to image)",
  react: "💫",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to an image!");
    const img = await Jimp.read(media);
    img.blur(10);
    const out = `blur_${Date.now()}.png`;
    await img.writeAsync(out);
    sendFile(m.from, out, "blur.png", m);
  }
};
