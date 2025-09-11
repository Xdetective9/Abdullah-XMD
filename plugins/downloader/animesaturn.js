const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "animesaturn",
  alias: ["saturn"],
  desc: "Download from AnimeSaturn",
  category: "downloader",
  usage: "animesaturn <url>",
  react: "🪐",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: animesaturn <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/animesaturn?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch AnimeSaturn video.");
      await sendFile(m.from, media, "animesaturn.mp4", m, { caption: getWatermark() || "📥 AnimeSaturn Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
