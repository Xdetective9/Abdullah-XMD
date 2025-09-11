const axios = require("axios");

module.exports = {
  name: "ai-drama",
  alias: ["drama","kdrama"],
  desc: "Get Asian drama info (MyDramaList API unofficial)",
  category: "ai",
  usage: "ai-drama <drama name>",
  react: "🎭",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-drama <drama name>");
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}`);
      const data = res.data?.data?.[0];
      if (!data) return m.reply("❌ No drama found.");
      await reply(`🎭 Drama: ${data.title}\nEpisodes: ${data.episodes}\nStatus: ${data.status}\nURL: ${data.url}`);
    } catch (e) {
      m.reply("🚫 Drama API error: " + (e.response?.data || e.message));
    }
  }
};
