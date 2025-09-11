const maker = require("mumaker");
module.exports = {
  name: "ice",
  alias: ["frozen"],
  desc: "Frozen ice text effect",
  category: "logo",
  usage: "ice <text>",
  react: "❄️",
  start: async (m, { text, sendImage }) => {
    if (!text) return m.reply("⚠️ Usage: ice <text>");
    try {
      let img = await maker.textpro("https://textpro.me/ice-cold-text-effect-862.html", [text]);
      await sendImage(m.from, img, m, { caption: "❄️ Ice effect logo" });
    } catch (err) {
      m.reply("🚫 Error: " + err.message);
    }
  }
};
