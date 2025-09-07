const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "instagram",
  alias: ["ig", "igdl"],
  desc: "Download Instagram media",
  category: "downloader",
  usage: "instagram <url>",
  react: "📸",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: instagram <url>");

    try {
      const url = `https://instagram-premium-api-2023.p.rapidapi.com/v1/media/pk/from/code`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "instagram-premium-api-2023.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        },
        responseType: "arraybuffer",
      });

      const wm = getWatermark();
      await sendFile(m.from, Buffer.from(res.data), "instagram.jpg", m, {
        caption: wm || "📥 Instagram Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
