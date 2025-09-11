const axios = require("axios");
module.exports = {
  name: "pickup",
  desc: "Random pickup line",
  category: "fun",
  usage: "pickup",
  react: "😉",
  start: async (m) => {
    try {
      const res = await axios.get("https://api.popcat.xyz/pickuplines");
      m.reply(res.data.pickupline);
    } catch {
      m.reply("❌ Couldn't fetch pickup line.");
    }
  },
};
