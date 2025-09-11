const maker = require("mumaker");
module.exports = {
  name: "glitch",
  alias: [],
  desc: "Glitch text effect",
  category: "logo",
  usage: "glitch <text>",
  react: "⚡",
  start: async (m, { text, sendImage }) => {
    if (!text) return m.reply("⚠️ Usage: glitch <text>");
    try {
      let img = await maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text]);
      await sendImage(m.from, img, m, { caption: "⚡ Glitch effect logo" });
    } catch (err) {
      m.reply("🚫 Error: " + err.message);
    }
  }
};
