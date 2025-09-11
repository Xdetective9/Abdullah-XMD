const axios = require("axios");

module.exports = {
  name: "ai-story",
  alias: ["story","shortstory"],
  desc: "Generate a short story",
  category: "ai",
  usage: "ai-story <topic>",
  react: "📖",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-story <topic>");
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY;
      const prompt = `Write a 3-5 paragraph short story about ${text}.`;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` } });
      await reply(res.data.choices[0].message.content.trim());
    } catch (e) {
      m.reply("🚫 Story error: " + (e.response?.data || e.message));
    }
  }
};
