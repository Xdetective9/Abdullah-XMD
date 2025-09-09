const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "streamtape",
  alias: ["stape"],
  desc: "Download from StreamTape",
  category: "downloader",
  usage: "streamtape <url>",
  react: "📼",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: streamtape <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/streamtape?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch StreamTape video.");
      await sendFile(m.from, media, "streamtape.mp4", m, { caption: getWatermark() || "📥 StreamTape Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
