const imageToAscii = require("image-to-ascii");

module.exports = {
  name: "toascii",
  desc: "Convert image to ASCII art",
  category: "converter",
  usage: "toascii (reply to image)",
  react: "🎨",
  start: async (m, { media }) => {
    if (!media) return m.reply("⚠️ Reply to an image!");
    imageToAscii(media, (err, converted) => {
      if (err) return m.reply("❌ Conversion failed.");
      m.reply("```" + converted + "```");
    });
  }
};
