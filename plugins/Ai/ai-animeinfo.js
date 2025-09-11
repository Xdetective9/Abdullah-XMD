const axios = require("axios");

module.exports = {
  name: "ai-animeinfo",
  alias: ["anime","anime-search"],
  desc: "Fetch anime info from Jikan (MAL)",
  category: "ai",
  usage: "ai-animeinfo <anime name>",
  react: "🎌",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-animeinfo <anime name>");
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`);
      const data = res.data?.data?.[0];
      if (!data) return m.reply("❌ No anime found.");
      const out = [
        `Title: ${data.title}`,
        `Type: ${data.type} • Episodes: ${data.episodes || "N/A"}`,
        `Score: ${data.score || "N/A"}`,
        `Status: ${data.status || "N/A"}`,
        `URL: ${data.url}`,
        `Synopsis: ${data.synopsis ? data.synopsis.substring(0, 800) + (data.synopsis.length>800?"...":"") : "N/A"}`
      ].join("\n\n");
      await reply(out);
    } catch (e) {
      m.reply("🚫 Anime API error: " + (e.response?.data || e.message));
    }
  }
};
