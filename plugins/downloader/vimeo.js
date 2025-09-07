const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "vimeo",
  alias: ["vm", "vmdl"],
  desc: "Download Vimeo video",
  category: "downloader",
  usage: "vimeo <url>",
  react: "🎬",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: vimeo <url>");

    try {
      const url = `https://vimeo-downloader1.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "vimeo-downloader1.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const video = res.data?.download;
      if (!video) return m.reply("❌ Couldn't fetch Vimeo video.");

      const wm = getWatermark();
      await sendFile(m.from, video, "vimeo.mp4", m, {
        caption: wm || "📥 Vimeo Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
    
