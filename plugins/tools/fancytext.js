// plugins/tools/fancytext.js
const axios = require("axios");
module.exports = {
  name: "fancytext",
  alias: ["fancy"],
  desc: "Convert text into fancy styles",
  category: "tools",
  usage: "fancytext <text>",
  react: "✨",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: fancytext <text>");
    try {
      const url = `https://api.popcat.xyz/fancytext?text=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      let msg = "✨ Fancy Text Styles ✨\n\n";
      res.data.slice(0, 10).forEach((s, i) => {
        msg += `${i + 1}. ${s}\n`;
      });
      m.reply(msg);
    } catch {
      m.reply("❌ Error generating fancy text.");
    }
  },
};
