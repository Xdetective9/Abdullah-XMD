const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "crunchyroll",
  alias: ["cr"],
  desc: "Download anime from Crunchyroll",
  category: "downloader",
  usage: "crunchyroll <url>",
  react: "🍥",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: crunchyroll <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/crunchyroll?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Crunchyroll video.");
      await sendFile(m.from, media, "crunchyroll.mp4", m, { caption: getWatermark() || "📥 Crunchyroll Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
