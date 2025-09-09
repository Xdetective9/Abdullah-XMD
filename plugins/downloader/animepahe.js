const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "animepahe",
  alias: ["animeph"],
  desc: "Download from AnimePahe",
  category: "downloader",
  usage: "animepahe <url>",
  react: "🍥",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: animepahe <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/animepahe?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch AnimePahe video.");
      await sendFile(m.from, media, "animepahe.mp4", m, { caption: getWatermark() || "📥 AnimePahe Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
                    
