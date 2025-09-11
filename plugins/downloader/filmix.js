const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "filmix",
  alias: ["fmix"],
  desc: "Download movies from Filmix",
  category: "downloader",
  usage: "filmix <url>",
  react: "🎞️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: filmix <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/filmix?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Filmix movie.");
      await sendFile(m.from, media, "filmix.mp4", m, { caption: getWatermark() || "📥 Filmix Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
