const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "reddit",
  alias: ["rd", "rdddl"],
  desc: "Download Reddit posts",
  category: "downloader",
  usage: "reddit <url>",
  react: "👽",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: reddit <url>");

    try {
      const url = `https://reddit-video-and-image-downloader.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "reddit-video-and-image-downloader.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const media = res.data?.media?.[0]?.url;
      if (!media) return m.reply("❌ Couldn't fetch Reddit media.");

      const wm = getWatermark();
      await sendFile(m.from, media, "reddit.mp4", m, {
        caption: wm || "📥 Reddit Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};

