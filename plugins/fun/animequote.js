const axios = require("axios");
module.exports = {
  name: "animequote",
  desc: "Get an anime quote",
  category: "fun",
  usage: "animequote",
  react: "🎌",
  start: async (m) => {
    try {
      const res = await axios.get("https://animechan.xyz/api/random");
      m.reply(`_"${res.data.quote}"_\n— *${res.data.character}* (${res.data.anime})`);
    } catch {
      m.reply("❌ Couldn't fetch anime quote.");
    }
  },
};
