const axios = require("axios");

module.exports = {
  name: "openai-chat",
  alias: ["chat","gpt"],
  desc: "Chat with OpenAI GPT (short)",
  category: "ai",
  usage: "openai-chat <prompt>",
  react: "🤖",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: openai-chat <prompt>");
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY || "sk-svcacct-cWfbYpSP..."; // fallback you provided
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: text }
        ],
        max_tokens: 600
      }, {
        headers: { Authorization: `Bearer ${OPENAI_KEY}`, "Content-Type": "application/json" }
      });
      const replyText = res.data?.choices?.[0]?.message?.content?.trim() || "No response.";
      await reply(replyText);
    } catch (e) {
      m.reply("🚫 OpenAI error: " + (e.response?.data?.error?.message || e.message));
    }
  }
};
