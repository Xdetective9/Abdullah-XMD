const axios = require("axios");
module.exports = {
  name: "uselessfact",
  desc: "Get a useless fact",
  category: "fun",
  usage: "uselessfact",
  react: "🤷",
  start: async (m) => {
    try {
      const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
      m.reply(res.data.text);
    } catch {
      m.reply("❌ Couldn't fetch useless fact.");
    }
  },
};
