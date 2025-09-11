const axios = require("axios");

module.exports = {
  name: "openai-code",
  alias: ["codegen","coder"],
  desc: "Generate code using OpenAI",
  category: "ai",
  usage: "openai-code <prompt>",
  react: "💻",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: openai-code <prompt>");
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY || "sk-svcacct-cWfbYpSP...";
      const prompt = `You are an expert programmer. Generate precise code for the following request:\n\n${text}\n\nRespond with code only, and a short description.`;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1200
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` }});
      const out = res.data?.choices?.[0]?.message?.content || "No result.";
      await reply(out);
    } catch (e) {
      m.reply("🚫 Code generation error: " + (e.response?.data?.error?.message || e.message));
    }
  }
};
