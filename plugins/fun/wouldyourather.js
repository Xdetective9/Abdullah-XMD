const axios = require("axios");
module.exports = {
  name: "wouldyourather",
  desc: "Play would you rather",
  category: "fun",
  usage: "wouldyourather",
  react: "🤔",
  start: async (m) => {
    try {
      const res = await axios.get("https://would-you-rather-api.abaanshanid.repl.co/");
      m.reply(`🤔 Would you rather...\n\nA) ${res.data.data[0]}\nB) ${res.data.data[1]}`);
    } catch {
      m.reply("❌ Couldn't fetch WYR question.");
    }
  },
};
