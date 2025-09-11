const axios = require("axios");
module.exports = {
  name: "compliment",
  desc: "Get a compliment",
  category: "fun",
  usage: "compliment",
  react: "🌹",
  start: async (m) => {
    try {
      const res = await axios.get("https://complimentr.com/api");
      m.reply(res.data.compliment);
    } catch {
      m.reply("❌ Couldn't fetch compliment.");
    }
  },
};
