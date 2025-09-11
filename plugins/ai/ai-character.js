const axios = require("axios");

module.exports = {
  name: "ai-character",
  alias: ["roleplay","char-ai"],
  desc: "Chat as a character (OpenAI)",
  category: "ai",
  usage: "ai-character <character>|<message>",
  react: "🎭",
  start: async (m, { text, reply }) => {
    if (!text.includes("|")) return m.reply("⚠️ Usage: ai-character <character>|<message>");
    try {
      const [char, msg] = text.split("|").map(s => s.trim());
      const OPENAI_KEY = process.env.OPENAI_API_KEY;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: `You are roleplaying as ${char}. Stay in character.` },
          { role: "user", content: msg }
        ]
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` } });
      await reply(res.data.choices[0].message.content.trim());
    } catch (e) {
      m.reply("🚫 Character AI error: " + (e.response?.data || e.message));
    }
  }
};
