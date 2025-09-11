const axios = require("axios");

module.exports = {
  name: "ai-animequote",
  alias: ["animequote","quoteanime"],
  desc: "Get random anime quote",
  category: "ai",
  usage: "ai-animequote",
  react: "💬",
  start: async (m, { reply }) => {
    try {
      const res = await axios.get("https://animechan.xyz/api/random");
      await reply(`💬 "${res.data.quote}"\n- ${res.data.character} (${res.data.anime})`);
    } catch (e) {
      m.reply("🚫 Anime quote API error: " + (e.response?.data || e.message));
    }
  }
};
