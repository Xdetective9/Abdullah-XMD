const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "okru",
  alias: ["ok"],
  desc: "Download from OK.ru (Odnoklassniki)",
  category: "downloader",
  usage: "okru <url>",
  react: "🇷🇺",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: okru <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/okru?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch OK.ru video.");
      await sendFile(m.from, media, "okru.mp4", m, { caption: getWatermark() || "📥 OK.ru Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
