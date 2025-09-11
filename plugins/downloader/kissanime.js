const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "kissanime",
  alias: ["kissan"],
  desc: "Download from KissAnime",
  category: "downloader",
  usage: "kissanime <url>",
  react: "💋",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: kissanime <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/kissanime?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch KissAnime video.");
      await sendFile(m.from, media, "kissanime.mp4", m, { caption: getWatermark() || "📥 KissAnime Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
