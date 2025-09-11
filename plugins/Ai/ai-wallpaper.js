const axios = require("axios");

module.exports = {
  name: "ai-wallpaper",
  alias: ["wallpaper","wallpapers"],
  desc: "Fetch anime wallpaper",
  category: "ai",
  usage: "ai-wallpaper <query>",
  react: "🖼️",
  start: async (m, { text, sendFile }) => {
    try {
      const q = text || "anime";
      const res = await axios.get(`https://api.waifu.pics/sfw/waifu`);
      await sendFile(m.from, res.data.url, "wall.jpg", m, { caption: `🖼️ Wallpaper: ${q}` });
    } catch (e) {
      m.reply("🚫 Wallpaper API error: " + (e.response?.data || e.message));
    }
  }
};
