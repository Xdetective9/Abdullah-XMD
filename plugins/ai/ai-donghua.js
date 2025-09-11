const axios = require("axios");

module.exports = {
  name: "ai-donghua",
  alias: ["donghua","chineseanime"],
  desc: "Get Donghua info (Jikan-like)",
  category: "ai",
  usage: "ai-donghua <title>",
  react: "🐉",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-donghua <title>");
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&type=ONA`);
      const d = res.data?.data?.[0];
      if (!d) return m.reply("❌ Donghua not found.");
      await reply(`🐉 ${d.title}\nEpisodes: ${d.episodes}\nScore: ${d.score}\nStatus: ${d.status}\nURL: ${d.url}`);
    } catch (e) {
      m.reply("🚫 Donghua error: " + (e.response?.data || e.message));
    }
  }
};
