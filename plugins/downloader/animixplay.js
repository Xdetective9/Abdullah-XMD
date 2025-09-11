const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "animixplay",
  alias: ["animix"],
  desc: "Download anime from AniMixPlay",
  category: "downloader",
  usage: "animixplay <url>",
  react: "🎥",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: animixplay <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/animixplay?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch AniMixPlay video.");
      await sendFile(m.from, media, "animixplay.mp4", m, { caption: getWatermark() || "📥 AniMixPlay Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
