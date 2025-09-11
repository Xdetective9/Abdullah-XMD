const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "gogoanime",
  alias: ["gogo"],
  desc: "Download from GogoAnime",
  category: "downloader",
  usage: "gogoanime <url>",
  react: "🍜",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: gogoanime <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/gogoanime?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch GogoAnime video.");
      await sendFile(m.from, media, "gogoanime.mp4", m, { caption: getWatermark() || "📥 GogoAnime Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
