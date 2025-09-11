const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "donghua",
  alias: ["donghua-dl"],
  desc: "Download Chinese Donghua",
  category: "downloader",
  usage: "donghua <url>",
  react: "🐉",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: donghua <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/donghua?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch Donghua video.");
      await sendFile(m.from, media, "donghua.mp4", m, { caption: getWatermark() || "📥 Donghua Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
