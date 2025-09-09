const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "rumble",
  alias: ["rmb"],
  desc: "Download Rumble videos",
  category: "downloader",
  usage: "rumble <url>",
  react: "📺",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: rumble <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/rumble?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Rumble video.");
      await sendFile(m.from, media, "rumble.mp4", m, { caption: getWatermark() || "📥 Rumble Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
