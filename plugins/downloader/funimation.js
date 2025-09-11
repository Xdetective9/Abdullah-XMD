const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "funimation",
  alias: ["funi"],
  desc: "Download anime from Funimation",
  category: "downloader",
  usage: "funimation <url>",
  react: "🎭",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: funimation <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/funimation?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Funimation video.");
      await sendFile(m.from, media, "funimation.mp4", m, { caption: getWatermark() || "📥 Funimation Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
