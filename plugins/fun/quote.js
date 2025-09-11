const axios = require("axios");
module.exports = {
  name: "quote",
  desc: "Get a random quote",
  category: "fun",
  usage: "quote",
  react: "📜",
  start: async (m) => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      m.reply(`_"${res.data.content}"_\n— *${res.data.author}*`);
    } catch {
      m.reply("❌ Couldn't fetch quote.");
    }
  },
};
