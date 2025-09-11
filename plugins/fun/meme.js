const axios = require("axios");
module.exports = {
  name: "meme",
  desc: "Get a random meme",
  category: "fun",
  usage: "meme",
  react: "😂",
  start: async (m, { sendFile }) => {
    try {
      const res = await axios.get("https://meme-api.com/gimme");
      await sendFile(m.from, res.data.url, "meme.jpg", m, { caption: res.data.title });
    } catch (e) {
      m.reply("❌ Couldn't fetch meme.");
    }
  },
};
