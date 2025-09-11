// plugins/search/anime-search.js
const axios = require("axios");
module.exports = {
  name: "anime",
  desc: "Search anime info",
  category: "search",
  usage: "anime <name>",
  react: "🎌",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: anime <name>");
    try {
      const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`;
      const res = await axios.get(url);
      const anime = res.data.data?.[0];
      if (!anime) return m.reply("❌ No results.");
      let msg = `🎌 *${anime.title}*\n📅 Aired: ${anime.aired.string}\n📊 Score: ${anime.score}\n🎭 Genres: ${anime.genres.map(g => g.name).join(", ")}\n\n${anime.synopsis}`;
      m.reply(msg);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
