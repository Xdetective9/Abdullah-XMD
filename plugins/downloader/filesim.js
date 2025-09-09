const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "filesim",
  alias: ["fsim"],
  desc: "Download from FileSim",
  category: "downloader",
  usage: "filesim <url>",
  react: "🗂️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: filesim <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/filesim?url=${encodeURIComponent(text)}`);
      const file = res.data.result;
      if (!file?.url) return m.reply("❌ Could not fetch FileSim file.");
      await sendFile(m.from, file.url, file.name || "filesim.file", m, { caption: getWatermark() || "📥 FileSim Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
