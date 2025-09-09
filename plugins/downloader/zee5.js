const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "zee5",
  alias: ["zee"],
  desc: "Download movies/series from Zee5",
  category: "downloader",
  usage: "zee5 <url>",
  react: "🎞️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: zee5 <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/zee5?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Failed to fetch Zee5 media.");
      await sendFile(m.from, media, "zee5.mp4", m, { caption: getWatermark() || "📥 Zee5 Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
