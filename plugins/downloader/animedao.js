const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "animedao",
  alias: ["dao"],
  desc: "Download from AnimeDao",
  category: "downloader",
  usage: "animedao <url>",
  react: "🈚",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: animedao <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/animedao?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch AnimeDao video.");
      await sendFile(m.from, media, "animedao.mp4", m, { caption: getWatermark() || "📥 AnimeDao Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
