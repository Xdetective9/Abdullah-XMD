const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "kuaishou",
  alias: ["kwai"],
  desc: "Download Kuaishou videos",
  category: "downloader",
  usage: "kuaishou <url>",
  react: "🎥",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: kuaishou <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/kuaishou?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Failed to fetch Kuaishou video.");
      await sendFile(m.from, media, "kuaishou.mp4", m, { caption: getWatermark() || "📥 Kuaishou Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
