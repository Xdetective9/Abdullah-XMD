// plugins/search/lyrics.js
const axios = require("axios");
module.exports = {
  name: "lyrics",
  desc: "Search song lyrics",
  category: "search",
  usage: "lyrics <song>",
  react: "🎶",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: lyrics <song>");
    try {
      const url = `https://api.popcat.xyz/lyrics?song=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      m.reply(`🎶 *${res.data.title}* by ${res.data.artist}\n\n${res.data.lyrics.slice(0, 3000)}`);
    } catch {
      m.reply("❌ Lyrics not found.");
    }
  },
};
