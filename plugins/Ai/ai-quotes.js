const axios = require("axios");

module.exports = {
  name: "ai-quotes",
  alias: ["quotes","quote-gen"],
  desc: "Generate a quote using OpenAI",
  category: "ai",
  usage: "ai-quotes <topic>",
  react: "💬",
  start: async (m, { text, reply }) => {
    if (!text) text = "motivation";
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY || "sk-svcacct-cWfbYpSP...";
      const prompt = `Write a short inspirational quote about ${text} in 1-2 lines.`;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 80
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` }});
      const out = res.data?.choices?.[0]?.message?.content || "No quote.";
      await reply(out.trim());
    } catch (e) {
      m.reply("🚫 Quote error: " + (e.response?.data || e.message));
    }
  }
};
