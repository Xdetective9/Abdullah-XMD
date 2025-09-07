const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "soundcloud",
  alias: ["sc", "scdl"],
  desc: "Download SoundCloud audio",
  category: "downloader",
  usage: "soundcloud <url>",
  react: "🎵",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: soundcloud <url>");

    try {
      const url = `https://soundcloud-downloader1.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "soundcloud-downloader1.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const audio = res.data?.download;
      if (!audio) return m.reply("❌ Couldn't fetch SoundCloud audio.");

      const wm = getWatermark();
      await sendFile(m.from, audio, "soundcloud.mp3", m, {
        caption: wm || "📥 SoundCloud Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
