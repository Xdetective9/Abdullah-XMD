const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "triller",
  alias: ["trlr"],
  desc: "Download Triller videos",
  category: "downloader",
  usage: "triller <url>",
  react: "🎶",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: triller <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/triller?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Triller video.");
      await sendFile(m.from, media, "triller.mp4", m, { caption: getWatermark() || "📥 Triller Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
