const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "apkmirror",
  alias: ["apk"],
  desc: "Download APK from APKMirror",
  category: "downloader",
  usage: "apkmirror <app name>",
  react: "📱",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: apkmirror <app name>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/search/apkmirror?query=${encodeURIComponent(text)}`);
      const link = res.data.result?.download;
      if (!link) return m.reply("❌ Could not fetch APK.");
      await sendFile(m.from, link, `${text}.apk`, m, { caption: getWatermark() || "📥 APKMirror Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
