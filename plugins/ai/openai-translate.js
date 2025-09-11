const axios = require("axios");

module.exports = {
  name: "openai-translate",
  alias: ["translate-ai","ai-translate"],
  desc: "Translate using OpenAI",
  category: "ai",
  usage: "openai-translate <lang> | <text>",
  react: "🌐",
  start: async (m, { text, reply }) => {
    if (!text || !text.includes("|")) return m.reply("⚠️ Usage: openai-translate <lang> | <text>");
    try {
      const [lang, ...rest] = text.split("|").map(s => s.trim());
      const txt = rest.join("|").trim();
      const OPENAI_KEY = process.env.OPENAI_API_KEY || "sk-svcacct-cWfbYpSP...";
      const prompt = `Translate the following text to ${lang}:\n\n${txt}`;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` }});
      const out = res.data?.choices?.[0]?.message?.content || "No translation.";
      await reply(out);
    } catch (e) {
      m.reply("🚫 Translate error: " + (e.response?.data?.error?.message || e.message));
    }
  }
};
