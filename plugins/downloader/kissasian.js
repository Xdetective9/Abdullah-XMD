const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "kissasian",
  alias: ["ka"],
  desc: "Download from KissAsian",
  category: "downloader",
  usage: "kissasian <url>",
  react: "🌸",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: kissasian <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/kissasian?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch KissAsian drama.");
      await sendFile(m.from, media, "kissasian.mp4", m, { caption: getWatermark() || "📥 KissAsian Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
