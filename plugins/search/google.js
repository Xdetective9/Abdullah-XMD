// plugins/search/google.js
const axios = require("axios");
module.exports = {
  name: "google",
  desc: "Search Google for results",
  category: "search",
  usage: "google <query>",
  react: "🌍",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: google <query>");
    try {
      const url = `https://api.popcat.xyz/google?q=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const results = res.data?.results || [];
      if (!results.length) return m.reply("❌ No results found.");
      let msg = `🔎 Google Results for: *${text}*\n\n`;
      results.slice(0, 5).forEach((r, i) => {
        msg += `${i + 1}. ${r.title}\n${r.link}\n${r.snippet}\n\n`;
      });
      m.reply(msg);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
