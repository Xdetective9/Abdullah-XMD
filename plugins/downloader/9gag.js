const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "9gag",
  alias: ["gag"],
  desc: "Download 9GAG videos",
  category: "downloader",
  usage: "9gag <url>",
  react: "🤣",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: 9gag <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/9gag?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Failed to fetch 9gag video.");
      await sendFile(m.from, media, "9gag.mp4", m, { caption: getWatermark() || "📥 9GAG Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};

