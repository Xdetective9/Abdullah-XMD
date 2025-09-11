const axios = require("axios");

module.exports = {
  name: "lyrics",
  alias: ["songlyrics"],
  desc: "Get song lyrics",
  category: "utility",
  usage: "lyrics <song>",
  react: "🎶",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: lyrics <song>");
    try {
      const res = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(text)}`);
      m.reply("🎶 Lyrics:\n" + res.data.lyrics);
    } catch {
      m.reply("❌ Lyrics not found.");
    }
  }
};
