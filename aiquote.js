const axios = require("axios");

module.exports = {
  name: "aiquote",
  alias: ["quoteai"],
  desc: "Generate AI motivational quotes",
  category: "ai",
  usage: "aiquote",
  react: "💡",
  start: async (m) => {
    try {
      const res = await axios.get(`https://api.quotable.io/random`);
      m.reply("💡 Quote: " + res.data.content + "\n— " + res.data.author);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
