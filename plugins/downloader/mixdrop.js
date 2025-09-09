const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "mixdrop",
  alias: ["mix"],
  desc: "Download from MixDrop",
  category: "downloader",
  usage: "mixdrop <url>",
  react: "💾",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: mixdrop <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/mixdrop?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Failed to fetch MixDrop file.");
      await sendFile(m.from, media, "mixdrop.mp4", m, { caption: getWatermark() || "📥 MixDrop Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
