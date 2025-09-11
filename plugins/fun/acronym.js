const axios = require("axios");
module.exports = {
  name: "acronym",
  desc: "Expand acronym",
  category: "fun",
  usage: "acronym <word>",
  react: "🔤",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Provide an acronym!");
    try {
      const res = await axios.get(`https://api.api-ninjas.com/v1/acronym?query=${encodeURIComponent(text)}`, {
        headers: { "X-Api-Key": process.env.NINJA_API_KEY }
      });
      if (res.data.length === 0) return m.reply("❌ No result found.");
      m.reply(`🔤 ${text} = ${res.data[0].definition}`);
    } catch {
      m.reply("❌ Couldn't fetch acronym.");
    }
  },
};
