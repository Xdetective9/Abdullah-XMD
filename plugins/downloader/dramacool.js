const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "dramacool",
  alias: ["drama"],
  desc: "Download Asian dramas from DramaCool",
  category: "downloader",
  usage: "dramacool <url>",
  react: "📺",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: dramacool <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/dramacool?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch DramaCool video.");
      await sendFile(m.from, media, "dramacool.mp4", m, { caption: getWatermark() || "📥 DramaCool Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
