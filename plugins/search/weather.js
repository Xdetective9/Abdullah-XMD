// plugins/search/weather.js
const axios = require("axios");
module.exports = {
  name: "weather",
  desc: "Get weather info",
  category: "search",
  usage: "weather <city>",
  react: "☁️",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: weather <city>");
    try {
      const url = `https://wttr.in/${encodeURIComponent(text)}?format=3`;
      const res = await axios.get(url);
      m.reply("☁️ Weather: " + res.data);
    } catch {
      m.reply("❌ Failed to fetch weather.");
    }
  },
};
