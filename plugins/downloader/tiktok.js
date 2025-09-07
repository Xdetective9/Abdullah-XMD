const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "tiktok",
  alias: ["tt", "ttdl"],
  desc: "Download TikTok videos",
  category: "downloader",
  usage: "tiktok <url>",
  react: "🎵",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: tiktok <url>");

    try {
      const url = `https://tiktok-video-feature-summary.p.rapidapi.com/?url=${encodeURIComponent(text)}&hd=1`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "tiktok-video-feature-summary.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        },
      });

      const video = res.data?.video_url;
      if (!video) return m.reply("❌ Couldn't fetch TikTok video.");

      const wm = getWatermark();
      await sendFile(m.from, video, "tiktok.mp4", m, {
        caption: wm || "📥 TikTok Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
                     
