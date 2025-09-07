const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "dailymotion",
  alias: ["dm", "dmdl"],
  desc: "Download DailyMotion video",
  category: "downloader",
  usage: "dailymotion <url>",
  react: "📺",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: dailymotion <url>");

    try {
      const url = `https://dailymotion-downloader.p.rapidapi.com/?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "dailymotion-downloader.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        }
      });

      const video = res.data?.download;
      if (!video) return m.reply("❌ Couldn't fetch DailyMotion video.");

      const wm = getWatermark();
      await sendFile(m.from, video, "dailymotion.mp4", m, {
        caption: wm || "📥 DailyMotion Download",
      });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
