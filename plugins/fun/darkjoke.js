const axios = require("axios");
module.exports = {
  name: "darkjoke",
  desc: "Get a dark humor joke",
  category: "fun",
  usage: "darkjoke",
  react: "😈",
  start: async (m) => {
    try {
      const res = await axios.get("https://v2.jokeapi.dev/joke/Dark");
      if (res.data.type === "single") return m.reply(res.data.joke);
      else return m.reply(`${res.data.setup}\n${res.data.delivery}`);
    } catch {
      m.reply("❌ Couldn't fetch dark joke.");
    }
  },
};
