const axios = require("axios");

module.exports = {
  name: "shorturl",
  alias: ["short"],
  desc: "Shorten a URL",
  category: "utility",
  usage: "shorturl <link>",
  react: "🔗",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: shorturl <link>");
    try {
      const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(text)}`);
      m.reply("✅ Shortened URL: " + res.data);
    } catch (err) {
      m.reply("❌ Failed to shorten URL.");
    }
  }
};
