const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "snapchat",
  alias: ["snap"],
  desc: "Download Snapchat videos",
  category: "downloader",
  usage: "snapchat <url>",
  react: "👻",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: snapchat <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/snapchat?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Snapchat video.");
      await sendFile(m.from, media, "snapchat.mp4", m, { caption: getWatermark() || "📥 Snapchat Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
