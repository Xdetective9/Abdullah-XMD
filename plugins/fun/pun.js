const axios = require("axios");
module.exports = {
  name: "pun",
  desc: "Get a random pun",
  category: "fun",
  usage: "pun",
  react: "😹",
  start: async (m) => {
    try {
      const res = await axios.get("https://v2.jokeapi.dev/joke/Pun");
      if (res.data.type === "single") return m.reply(res.data.joke);
      else return m.reply(`${res.data.setup}\n${res.data.delivery}`);
    } catch {
      m.reply("❌ Couldn't fetch pun.");
    }
  },
};
