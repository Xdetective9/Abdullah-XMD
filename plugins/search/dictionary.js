// plugins/search/dictionary.js
const axios = require("axios");
module.exports = {
  name: "define",
  alias: ["dictionary"],
  desc: "Define a word",
  category: "search",
  usage: "define <word>",
  react: "📚",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: define <word>");
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const entry = res.data[0];
      if (!entry) return m.reply("❌ Not found.");
      m.reply(`📚 *${entry.word}*\n${entry.meanings[0].partOfSpeech}\n👉 ${entry.meanings[0].definitions[0].definition}`);
    } catch {
      m.reply("🚫 Error.");
    }
  },
};
