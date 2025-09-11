const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "asianwiki",
  alias: ["awiki"],
  desc: "Download Asian dramas from AsianWiki",
  category: "downloader",
  usage: "asianwiki <url>",
  react: "🎎",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: asianwiki <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/asianwiki?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch AsianWiki drama.");
      await sendFile(m.from, media, "asianwiki.mp4", m, { caption: getWatermark() || "📥 AsianWiki Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
