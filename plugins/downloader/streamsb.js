const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "streamsb",
  alias: ["ssb"],
  desc: "Download from StreamSB",
  category: "downloader",
  usage: "streamsb <url>",
  react: "📡",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: streamsb <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/streamsb?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch StreamSB video.");
      await sendFile(m.from, media, "streamsb.mp4", m, { caption: getWatermark() || "📥 StreamSB Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
