const axios = require("axios");

module.exports = {
  name: "ai-poetry",
  alias: ["poem","poetry"],
  desc: "Generate a short poem using OpenAI",
  category: "ai",
  usage: "ai-poetry <topic>",
  react: "✍️",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-poetry <topic>");
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY || "sk-svcacct-cWfbYpSP...";
      const prompt = `Write a short 6-12 line poem about "${text}" with a gentle tone.`;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 400
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` }});
      const out = res.data?.choices?.[0]?.message?.content || "No poem.";
      await reply(out.trim());
    } catch (e) {
      m.reply("🚫 Poetry error: " + (e.response?.data || e.message));
    }
  }
};
