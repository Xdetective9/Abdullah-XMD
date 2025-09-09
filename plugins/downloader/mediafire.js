const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "mediafire",
  alias: ["mfire"],
  desc: "Download files from Mediafire",
  category: "downloader",
  usage: "mediafire <url>",
  react: "📦",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: mediafire <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/mediafire?url=${encodeURIComponent(text)}`);
      const result = res.data.result;
      if (!result?.link) return m.reply("❌ Failed to fetch Mediafire file.");
      await sendFile(m.from, result.link, result.filename, m, { caption: getWatermark() || "📥 Mediafire Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
