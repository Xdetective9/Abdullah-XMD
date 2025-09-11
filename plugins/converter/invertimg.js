const Jimp = require("jimp");

module.exports = {
  name: "invertimg",
  desc: "Invert image colors",
  category: "converter",
  usage: "invertimg (reply to image)",
  react: "🌈",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to an image!");
    const img = await Jimp.read(media);
    img.invert();
    const out = `inv_${Date.now()}.png`;
    await img.writeAsync(out);
    sendFile(m.from, out, "invert.png", m);
  }
};
