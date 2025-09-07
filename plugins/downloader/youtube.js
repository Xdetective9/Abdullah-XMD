const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "youtube",
  alias: ["yt", "ytdl"],
  desc: "Download YouTube video thumbnail",
  category: "downloader",
  usage: "youtube <video_id>",
  react: "🎬",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: youtube <video_id>");

    try {
      const url = `https://youtube-data16.p.rapidapi.com/files/thumbnails/${text}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "youtube-data16.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        },
        responseType: "arraybuffer",
      });

      const wm = getWatermark();
      await sendFile(m.from, Buffer.from(res.data), "youtube.jpg", m, {
        caption: wm || "📥 YouTube Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
        
