const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "imdb",
  alias: ["movieinfo"],
  desc: "Fetch movie poster/details from IMDB",
  category: "downloader",
  usage: "imdb <movie name>",
  react: "🎬",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: imdb <movie name>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/search/imdb?query=${encodeURIComponent(text)}`);
      const info = res.data.result;
      if (!info?.poster) return m.reply("❌ No result found.");
      await sendFile(m.from, info.poster, "poster.jpg", m, {
        caption: `🎬 *${info.title}*\n⭐ Rating: ${info.rating}\n📅 Year: ${info.year}\n\n${getWatermark()}`,
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
