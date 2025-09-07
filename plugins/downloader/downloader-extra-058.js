const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "facebook",
  alias: ["fb", "fbdl"],
  desc: "Download Facebook video",
  category: "downloader",
  usage: "facebook <url>",
  react: "📘",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: facebook <url>");

    try {
      const url = `https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "facebook-reel-and-video-downloader.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const video = res.data?.links?.[0]?.link;
      if (!video) return m.reply("❌ Couldn't fetch Facebook video.");

      const wm = getWatermark();
      await sendFile(m.from, video, "facebook.mp4", m, {
        caption: wm || "📥 Facebook Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
