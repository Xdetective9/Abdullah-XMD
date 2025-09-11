const axios = require("axios");

module.exports = {
  name: "aimeme",
  alias: ["memeai"],
  desc: "Generate funny AI memes",
  category: "ai",
  usage: "aimeme <text>",
  react: "😂",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: aimeme <caption>");
    try {
      const res = await axios.get(`https://meme-api.com/gimme`);
      await sendFile(m.from, res.data.url, "meme.jpg", m, { caption: text + "\n\n😂 AI Meme" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
