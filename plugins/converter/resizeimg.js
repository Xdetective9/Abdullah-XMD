const Jimp = require("jimp");

module.exports = {
  name: "resizeimg",
  desc: "Resize an image",
  category: "converter",
  usage: "resizeimg <width> <height>",
  react: "📏",
  start: async (m, { media, args, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to an image!");
    const [w, h] = args.map(Number);
    if (!w || !h) return m.reply("⚠️ Usage: resizeimg <width> <height>");
    const img = await Jimp.read(media);
    img.resize(w, h);
    const out = `resize_${Date.now()}.png`;
    await img.writeAsync(out);
    sendFile(m.from, out, "resize.png", m);
  }
};
