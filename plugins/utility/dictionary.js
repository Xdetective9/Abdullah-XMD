const axios = require("axios");

module.exports = {
  name: "dictionary",
  alias: ["dict"],
  desc: "Get word meaning",
  category: "utility",
  usage: "dict <word>",
  react: "📖",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: dict <word>");
    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
      const def = res.data[0].meanings[0].definitions[0].definition;
      m.reply(`📚 *${text}*: ${def}`);
    } catch (err) {
      m.reply("❌ No definition found.");
    }
  }
};
