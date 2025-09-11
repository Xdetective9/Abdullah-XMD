// plugins/search/ud.js
const axios = require("axios");
module.exports = {
  name: "ud",
  alias: ["urban"],
  desc: "Urban Dictionary search",
  category: "search",
  usage: "ud <word>",
  react: "📓",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: ud <word>");
    try {
      const url = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const def = res.data.list[0];
      if (!def) return m.reply("❌ No results.");
      m.reply(`📓 *${def.word}*\n\n${def.definition}\n\n👉 ${def.example}`);
    } catch {
      m.reply("🚫 Error.");
    }
  },
};
