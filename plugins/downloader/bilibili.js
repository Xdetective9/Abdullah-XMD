const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "bilibili",
  alias: ["bili", "bbdl"],
  desc: "Download Bilibili video",
  category: "downloader",
  usage: "bilibili <url>",
  react: "🐉",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: bilibili <url>");

    try {
      const url = `https://bilibili-video-downloader.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "bilibili-video-downloader.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const video = res.data?.download;
      if (!video) return m.reply("❌ Couldn't fetch Bilibili video.");

      const wm = getWatermark();
      await sendFile(m.from, video, "bilibili.mp4", m, {
        caption: wm || "📥 Bilibili Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
