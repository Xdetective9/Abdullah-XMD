const axios = require("axios");
module.exports = {
  name: "roast",
  desc: "Roast someone",
  category: "fun",
  usage: "roast",
  react: "🔥",
  start: async (m) => {
    try {
      const res = await axios.get("https://insult.mattbas.org/api/insult");
      m.reply(res.data);
    } catch {
      m.reply("❌ Couldn't fetch roast.");
    }
  },
};
