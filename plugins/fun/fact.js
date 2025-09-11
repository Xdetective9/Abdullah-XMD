const axios = require("axios");
module.exports = {
  name: "fact",
  desc: "Get a random fact",
  category: "fun",
  usage: "fact",
  react: "🧠",
  start: async (m) => {
    try {
      const res = await axios.get("https://api.api-ninjas.com/v1/facts?limit=1", {
        headers: { "X-Api-Key": process.env.NINJA_API_KEY }
      });
      m.reply(res.data[0].fact);
    } catch {
      m.reply("❌ Couldn't fetch fact.");
    }
  },
};
