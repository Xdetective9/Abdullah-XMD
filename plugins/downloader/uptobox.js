const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "uptobox",
  alias: ["upto"],
  desc: "Download files from Uptobox",
  category: "downloader",
  usage: "uptobox <url>",
  react: "📂",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: uptobox <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/uptobox?url=${encodeURIComponent(text)}`);
      const file = res.data.result;
      if (!file?.url) return m.reply("❌ Failed to fetch Uptobox file.");
      await sendFile(m.from, file.url, file.filename || "uptobox.file", m, { caption: getWatermark() || "📥 Uptobox Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
