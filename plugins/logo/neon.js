const maker = require("mumaker");
module.exports = {
  name: "neon",
  alias: [],
  desc: "Neon light text effect",
  category: "logo",
  usage: "neon <text>",
  react: "💡",
  start: async (m, { text, sendImage }) => {
    if (!text) return m.reply("⚠️ Usage: neon <text>");
    try {
      let img = await maker.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [text]);
      await sendImage(m.from, img, m, { caption: "✨ Neon effect logo" });
    } catch (err) {
      m.reply("🚫 Error: " + err.message);
    }
  }
};
