const maker = require("mumaker");
module.exports = {
  name: "smoke",
  alias: [],
  desc: "Smoke text effect",
  category: "logo",
  usage: "smoke <text>",
  react: "💨",
  start: async (m, { text, sendImage }) => {
    if (!text) return m.reply("⚠️ Usage: smoke <text>");
    try {
      let img = await maker.textpro("https://textpro.me/create-an-smoking-text-effect-online-free-1071.html", [text]);
      await sendImage(m.from, img, m, { caption: "💨 Smoke effect logo" });
    } catch (err) {
      m.reply("🚫 Error: " + err.message);
    }
  }
};
