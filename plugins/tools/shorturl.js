// plugins/tools/shorturl.js
const axios = require("axios");
module.exports = {
  name: "shorturl",
  desc: "Shorten a long URL",
  category: "tools",
  usage: "shorturl <link>",
  react: "🔗",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: shorturl <link>");
    try {
      const url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      m.reply(`🔗 Shortened URL: ${res.data}`);
    } catch {
      m.reply("❌ Failed to shorten.");
    }
  },
};