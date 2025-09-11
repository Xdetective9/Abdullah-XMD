const axios = require("axios");

module.exports = {
  name: "aichat",
  alias: ["ai", "gpt"],
  desc: "Chat with AI",
  category: "ai",
  usage: "aichat <your message>",
  react: "🤖",
  start: async (m, { text, mtype }) => {
    if (!text) return m.reply("⚠️ Usage: aichat <message>");
    try {
      const res = await axios.get(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(text)}&botname=XDetective&ownername=Abdullah`);
      m.reply(res.data.message);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
