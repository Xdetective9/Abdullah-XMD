const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "zippyshare",
  alias: ["zippy"],
  desc: "Download files from Zippyshare",
  category: "downloader",
  usage: "zippyshare <url>",
  react: "🗄️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: zippyshare <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/zippyshare?url=${encodeURIComponent(text)}`);
      const file = res.data.result;
      if (!file?.download) return m.reply("❌ Could not fetch Zippyshare file.");
      await sendFile(m.from, file.download, file.name, m, { caption: getWatermark() || "📥 Zippyshare Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
