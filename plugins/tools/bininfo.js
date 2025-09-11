// plugins/tools/bininfo.js
const axios = require("axios");
module.exports = {
  name: "bin",
  desc: "Get BIN (card) info",
  category: "tools",
  usage: "bin <first 6 digits>",
  react: "💳",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: bin <digits>");
    try {
      const url = `https://lookup.binlist.net/${text}`;
      const res = await axios.get(url);
      const b = res.data;
      m.reply(`💳 BIN Info\nBank: ${b.bank?.name || "N/A"}\nScheme: ${b.scheme}\nType: ${b.type}\nCountry: ${b.country?.name}`);
    } catch {
      m.reply("❌ BIN not found.");
    }
  },
};