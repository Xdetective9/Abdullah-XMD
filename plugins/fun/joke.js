const axios = require("axios");
module.exports = {
  name: "joke",
  desc: "Get a random joke",
  category: "fun",
  usage: "joke",
  react: "🤣",
  start: async (m) => {
    try {
      const res = await axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode");
      if (res.data.type === "single") return m.reply(res.data.joke);
      else return m.reply(`${res.data.setup}\n${res.data.delivery}`);
    } catch (e) {
      m.reply("❌ Couldn't fetch joke.");
    }
  },
};
