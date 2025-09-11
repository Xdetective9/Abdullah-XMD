const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "animeflv",
  alias: ["flv"],
  desc: "Download from AnimeFLV",
  category: "downloader",
  usage: "animeflv <url>",
  react: "🎌",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: animeflv <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/animeflv?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch AnimeFLV video.");
      await sendFile(m.from, media, "animeflv.mp4", m, { caption: getWatermark() || "📥 AnimeFLV Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
