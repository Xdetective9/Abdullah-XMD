const maker = require("mumaker");
module.exports = {
  name: "fire",
  alias: ["flame"],
  desc: "Burning fire text effect",
  category: "logo",
  usage: "fire <text>",
  react: "🔥",
  start: async (m, { text, sendImage }) => {
    if (!text) return m.reply("⚠️ Usage: fire <text>");
    try {
      let img = await maker.textpro("https://textpro.me/hot-fire-text-effect-online-free-963.html", [text]);
      await sendImage(m.from, img, m, { caption: "🔥 Fire effect logo" });
    } catch (err) {
      m.reply("🚫 Error: " + err.message);
    }
  }
};
