const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "spotify",
  alias: ["spot", "spdl"],
  desc: "Download Spotify track",
  category: "downloader",
  usage: "spotify <url>",
  react: "🎶",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: spotify <url>");

    try {
      const url = `https://spotify-downloader9.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const audio = res.data?.link;
      if (!audio) return m.reply("❌ Couldn't fetch Spotify track.");

      const wm = getWatermark();
      await sendFile(m.from, audio, "spotify.mp3", m, {
        caption: wm || "📥 Spotify Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
