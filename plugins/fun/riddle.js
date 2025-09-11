1const axios = require("axios");
module.exports = {
  name: "riddle",
  desc: "Get a random riddle",
  category: "fun",
  usage: "riddle",
  react: "🧩",
  start: async (m) => {
    try {
      const res = await axios.get("https://riddles-api.vercel.app/random");
      m.reply(`❓ ${res.data.riddle}\n\n💡 Answer: ${res.data.answer}`);
    } catch {
      m.reply("❌ Couldn't fetch riddle.");
    }
  },
};
