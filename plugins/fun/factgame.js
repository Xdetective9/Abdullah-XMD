const axios = require("axios");
module.exports = {
  name: "factgame",
  desc: "Guess if fact is true or false",
  category: "fun",
  usage: "factgame",
  react: "🧠",
  start: async (m) => {
    try {
      const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
      m.reply(`🧠 Fact: ${res.data.text}\n\nIs it True or False?`);
    } catch {
      m.reply("❌ Couldn't fetch fact.");
    }
  },
};
