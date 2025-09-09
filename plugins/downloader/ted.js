const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "ted",
  alias: ["tedtalk"],
  desc: "Download TED Talks",
  category: "downloader",
  usage: "ted <url>",
  react: "🎤",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: ted <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/ted?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch TED Talk.");
      await sendFile(m.from, media, "ted.mp4", m, { caption: getWatermark() || "📥 TED Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
