const axios = require("axios");

module.exports = {
  name: "aistory",
  alias: ["storyai"],
  desc: "Generate AI story",
  category: "ai",
  usage: "aistory <topic>",
  react: "📖",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: aistory <topic>");
    try {
      const res = await axios.get(`https://api.affiliateplus.xyz/api/chatbot?message=Write a short story about ${encodeURIComponent(text)}`);
      m.reply("📖 Story:\n\n" + res.data.message);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
