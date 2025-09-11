const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "mydramalist",
  alias: ["mdl"],
  desc: "Download Asian dramas from MyDramaList",
  category: "downloader",
  usage: "mydramalist <url>",
  react: "🎥",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: mydramalist <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/mydramalist?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch MyDramaList video.");
      await sendFile(m.from, media, "mydramalist.mp4", m, { caption: getWatermark() || "📥 MyDramaList Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
