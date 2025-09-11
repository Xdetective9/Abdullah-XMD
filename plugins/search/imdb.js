// plugins/search/imdb.js
const axios = require("axios");
module.exports = {
  name: "imdb",
  desc: "Search IMDb movies/shows",
  category: "search",
  usage: "imdb <title>",
  react: "🎥",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: imdb <title>");
    try {
      const url = `https://www.omdbapi.com/?apikey=564727fa&t=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      if (res.data.Response === "False") return m.reply("❌ Not found.");
      m.reply(`🎥 *${res.data.Title}* (${res.data.Year})\n⭐ Rating: ${res.data.imdbRating}\n🎭 Genre: ${res.data.Genre}\n📖 Plot: ${res.data.Plot}`);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
