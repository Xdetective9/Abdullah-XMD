// plugins/search/manga-search.js
const axios = require("axios");
module.exports = {
  name: "manga",
  desc: "Search manga info",
  category: "search",
  usage: "manga <name>",
  react: "📚",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: manga <name>");
    try {
      const url = `https://api.jikan.moe/v4/manga?q=${encodeURIComponent(text)}&limit=1`;
      const res = await axios.get(url);
      const manga = res.data.data?.[0];
      if (!manga) return m.reply("❌ No results.");
      m.reply(`📚 *${manga.title}*\n📅 Published: ${manga.published.string}\n📊 Score: ${manga.score}\n\n${manga.synopsis}`);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
