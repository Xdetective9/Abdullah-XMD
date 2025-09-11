const axios = require("axios");

module.exports = {
  name: "donghuainfo",
  alias: ["dhinfo"],
  desc: "Get Donghua details and links",
  category: "downloader",
  usage: "donghuainfo <donghua-name>",
  react: "📖",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: donghuainfo <donghua-name>");
    try {
      const res = await axios.get(`https://api.ryzendesu.vip/api/donghua?query=${encodeURIComponent(text)}`);
      if (!res.data) return m.reply("❌ Donghua not found.");
      m.reply("🐉 Donghua Info:\n\n" + JSON.stringify(res.data, null, 2));
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
