const axios = require("axios");

module.exports = {
  name: "imagine",
  alias: ["dream"],
  desc: "Generate AI image from text",
  category: "ai",
  usage: "imagine <prompt>",
  react: "🌌",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: imagine <prompt>");
    try {
      const res = await axios.get(`https://lexica.art/api/v1/search?q=${encodeURIComponent(text)}`);
      if (res.data.images && res.data.images.length > 0) {
        await sendFile(m.from, res.data.images[0].src, "imagine.jpg", m, { caption: "🌌 AI Imagination" });
      } else {
        m.reply("❌ No result found.");
      }
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
