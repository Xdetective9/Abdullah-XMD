const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "tumblr",
  alias: ["tmblr"],
  desc: "Download Tumblr videos/images",
  category: "downloader",
  usage: "tumblr <url>",
  react: "📖",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: tumblr <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/tumblr?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Tumblr media.");
      await sendFile(m.from, media, "tumblr.mp4", m, { caption: getWatermark() || "📥 Tumblr Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
      
