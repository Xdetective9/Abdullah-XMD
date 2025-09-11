const axios = require("axios");

module.exports = {
  name: "animeai",
  alias: ["aiart"],
  desc: "Generate AI anime art",
  category: "ai",
  usage: "animeai <prompt>",
  react: "🎨",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: animeai <prompt>");
    try {
      const res = await axios.get(`https://api-inference.huggingface.co/models/akhaliq/anything-v4.0`, {
        headers: { "Authorization": "Bearer hf_demo_token" },
        params: { inputs: text }
      });
      await sendFile(m.from, res.data.url, "animeai.png", m, { caption: "✨ AI Anime Art" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
