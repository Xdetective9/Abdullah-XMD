const axios = require("axios");

module.exports = {
  name: "ai-movieinfo",
  alias: ["movie","film"],
  desc: "Get movie info from OMDb",
  category: "ai",
  usage: "ai-movieinfo <movie name>",
  react: "🎬",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-movieinfo <movie name>");
    try {
      const KEY = process.env.OMDB_KEY || "thewdb"; // sample fallback
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${KEY}&t=${encodeURIComponent(text)}`);
      if (res.data.Response === "False") return m.reply("❌ Movie not found.");
      const info = [
        `🎬 ${res.data.Title} (${res.data.Year})`,
        `⭐ ${res.data.imdbRating} | ${res.data.Genre}`,
        `Director: ${res.data.Director}`,
        `Plot: ${res.data.Plot}`
      ].join("\n\n");
      await reply(info);
    } catch (e) {
      m.reply("🚫 OMDb error: " + (e.response?.data || e.message));
    }
  }
};
