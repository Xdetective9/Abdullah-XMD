const axios = require("axios");

module.exports = {
  name: "qna",
  alias: ["ask"],
  desc: "Ask AI question and get answer",
  category: "ai",
  usage: "qna <your question>",
  react: "📚",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: qna <question>");
    try {
      const res = await axios.get(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(text)}`);
      m.reply("📌 Answer: " + res.data.message);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
