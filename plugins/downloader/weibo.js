const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "weibo",
  alias: ["wb"],
  desc: "Download Weibo videos",
  category: "downloader",
  usage: "weibo <url>",
  react: "🐼",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: weibo <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/weibo?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Weibo video.");
      await sendFile(m.from, media, "weibo.mp4", m, { caption: getWatermark() || "📥 Weibo Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
