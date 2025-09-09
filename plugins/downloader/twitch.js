const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "twitch",
  alias: ["twdl"],
  desc: "Download Twitch video/clip",
  category: "downloader",
  usage: "twitch <url>",
  react: "🎮",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: twitch <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/twitch?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Failed to fetch Twitch media.");
      await sendFile(m.from, media, "twitch.mp4", m, { caption: getWatermark() || "📥 Twitch Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
