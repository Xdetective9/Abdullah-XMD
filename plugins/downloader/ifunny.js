const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "ifunny",
  alias: ["ifun"],
  desc: "Download iFunny videos",
  category: "downloader",
  usage: "ifunny <url>",
  react: "😂",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: ifunny <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/ifunny?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch iFunny video.");
      await sendFile(m.from, media, "ifunny.mp4", m, { caption: getWatermark() || "📥 iFunny Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
