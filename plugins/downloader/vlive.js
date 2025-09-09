const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "vlive",
  alias: ["vl"],
  desc: "Download VLive videos",
  category: "downloader",
  usage: "vlive <url>",
  react: "🎶",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: vlive <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/vlive?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch VLive video.");
      await sendFile(m.from, media, "vlive.mp4", m, { caption: getWatermark() || "📥 VLive Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
