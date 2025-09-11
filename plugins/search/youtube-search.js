// plugins/search/youtube-search.js
const axios = require("axios");
module.exports = {
  name: "ytsearch",
  alias: ["yts"],
  desc: "Search YouTube videos",
  category: "search",
  usage: "ytsearch <query>",
  react: "🎬",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: ytsearch <query>");
    try {
      const url = `https://api.popcat.xyz/youtube?q=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const vids = res.data || [];
      if (!vids.length) return m.reply("❌ No videos found.");
      let msg = `🎬 YouTube search results:\n\n`;
      vids.slice(0, 5).forEach((v, i) => {
        msg += `${i + 1}. ${v.title}\n🔗 ${v.url}\n👀 ${v.views} views | ⏱️ ${v.duration}\n\n`;
      });
      m.reply(msg);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
