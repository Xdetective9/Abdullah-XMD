const axios = require("axios");

module.exports = {
  name: "define",
  alias: ["dictionary"],
  desc: "Get word definition",
  category: "utility",
  usage: "define <word>",
  react: "📖",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: define <word>");
    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
      const def = res.data[0].meanings[0].definitions[0].definition;
      m.reply(`📖 Definition of *${text}*:\n${def}`);
    } catch {
      m.reply("❌ Word not found.");
    }
  }
};
