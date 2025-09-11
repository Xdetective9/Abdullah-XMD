const maker = require("mumaker");
module.exports = {
  name: "graffiti",
  alias: ["streetart"],
  desc: "Graffiti street art text",
  category: "logo",
  usage: "graffiti <text>",
  react: "🎨",
  start: async (m, { text, sendImage }) => {
    if (!text) return m.reply("⚠️ Usage: graffiti <text>");
    try {
      let img = await maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [text]);
      await sendImage(m.from, img, m, { caption: "🎨 Graffiti logo" });
    } catch (err) {
      m.reply("🚫 Error: " + err.message);
    }
  }
};
