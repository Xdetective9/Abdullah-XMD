const axios = require("axios");

module.exports = {
  name: "imdb",
  alias: ["movie"],
  desc: "Fetch IMDb movie info",
  category: "utility",
  usage: "imdb <movie>",
  react: "🎬",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: imdb <movie>");
    try {
      const res = await axios.get(`https://www.omdbapi.com/?t=${encodeURIComponent(text)}&apikey=${process.env.OMDB_API}`);
      m.reply(`🎬 ${res.data.Title} (${res.data.Year})\n⭐ Rating: ${res.data.imdbRating}\n🎭 Genre: ${res.data.Genre}\n📝 Plot: ${res.data.Plot}`);
    } catch {
      m.reply("❌ Movie not found.");
    }
  }
};
