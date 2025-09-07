const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "likee",
  alias: ["lk", "lkdl"],
  desc: "Download Likee video",
  category: "downloader",
  usage: "likee <url>",
  react: "🎭",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: likee <url>");

    try {
      const url = `https://likee-video-downloader.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "likee-video-downloader.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const video = res.data?.video;
      if (!video) return m.reply("❌ Couldn't fetch Likee video.");

      const wm = getWatermark();
      await sendFile(m.from, video, "likee.mp4", m, {
        caption: wm || "📥 Likee Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
