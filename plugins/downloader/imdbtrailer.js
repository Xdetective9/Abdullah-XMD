const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "imdbtrailer",
  alias: ["imdb"],
  desc: "Download IMDb trailers",
  category: "downloader",
  usage: "imdbtrailer <url>",
  react: "🎬",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: imdbtrailer <url>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/dl/imdb?url=${encodeURIComponent(text)}`);
      const media = res.data.result?.url;
      if (!media) return m.reply("❌ Could not fetch IMDb trailer.");
      await sendFile(m.from, media, "imdb.mp4", m, { caption: getWatermark() || "📥 IMDb Trailer Download" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};

