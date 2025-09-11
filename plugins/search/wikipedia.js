// plugins/search/wikipedia.js
const axios = require("axios");
module.exports = {
  name: "wiki",
  alias: ["wikipedia"],
  desc: "Search Wikipedia articles",
  category: "search",
  usage: "wiki <query>",
  react: "📖",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: wiki <query>");
    try {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      if (!res.data?.extract) return m.reply("❌ No results.");
      m.reply(`📖 *${res.data.title}*\n\n${res.data.extract}\n\n🔗 ${res.data.content_urls.desktop.page}`);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
