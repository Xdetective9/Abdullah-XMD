const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "anilist",
  alias: ["al"],
  desc: "Fetch Anime info & streams from AniList",
  category: "downloader",
  usage: "anilist <anime-name>",
  react: "📚",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: anilist <anime-name>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/anilist?query=${encodeURIComponent(text)}`);
      if (!res.data) return m.reply("❌ Anime not found.");
      m.reply("📖 AniList Result:\n\n" + JSON.stringify(res.data, null, 2));
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
