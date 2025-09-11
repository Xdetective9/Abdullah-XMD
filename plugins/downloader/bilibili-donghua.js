const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "bilibili-donghua",
  alias: ["bilidh"],
  desc: "Download Donghua from Bilibili",
  category: "downloader",
  usage: "bilibili-donghua <url>",
  react: "🐉",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: bilibili-donghua <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/bilibili?url=${encodeURIComponent(text)}`);
      const media = res.data?.result?.url;
      if (!media) return m.reply("❌ Donghua not found.");
      await sendFile(m.from, media, "bilibili.mp4", m, { caption: getWatermark() || "📥 Bilibili Donghua" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
