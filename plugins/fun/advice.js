const axios = require("axios");
module.exports = {
  name: "advice",
  desc: "Get a random advice",
  category: "fun",
  usage: "advice",
  react: "💡",
  start: async (m) => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      m.reply(res.data.slip.advice);
    } catch {
      m.reply("❌ Couldn't fetch advice.");
    }
  },
};

// truthdare.js