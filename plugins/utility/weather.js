const axios = require("axios");

module.exports = {
  name: "weather",
  alias: ["w"],
  desc: "Check weather",
  category: "utility",
  usage: "weather <city>",
  react: "☁️",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: weather <city>");
    try {
      const res = await axios.get(`https://wttr.in/${encodeURIComponent(text)}?format=%C+%t`);
      m.reply(`🌤️ Weather in ${text}: ${res.data}`);
    } catch (err) {
      m.reply("❌ Failed to fetch weather.");
    }
  }
};
