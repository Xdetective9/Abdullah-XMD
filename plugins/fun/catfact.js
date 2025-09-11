const axios = require("axios");
module.exports = {
  name: "catfact",
  desc: "Get a cat fact",
  category: "fun",
  usage: "catfact",
  react: "🐱",
  start: async (m) => {
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      m.reply(res.data.fact);
    } catch {
      m.reply("❌ Couldn't fetch cat fact.");
    }
  },
};
