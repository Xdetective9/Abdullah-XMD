const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "pinterest",
  alias: ["pin", "pindl"],
  desc: "Download Pinterest images/videos",
  category: "downloader",
  usage: "pinterest <url>",
  react: "📌",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: pinterest <url>");

    try {
      const url = `https://pinterest-video-and-image-downloader.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "pinterest-video-and-image-downloader.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const media = res.data?.media?.[0]?.url;
      if (!media) return m.reply("❌ Couldn't fetch Pinterest media.");

      const wm = getWatermark();
      await sendFile(m.from, media, "pinterest.jpg", m, {
        caption: wm || "📥 Pinterest Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
