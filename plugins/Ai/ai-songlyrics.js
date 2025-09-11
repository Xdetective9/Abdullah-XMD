const axios = require("axios");

module.exports = {
  name: "ai-songlyrics",
  alias: ["lyricsgen","songlyrics"],
  desc: "Generate custom song lyrics",
  category: "ai",
  usage: "ai-songlyrics <topic>",
  react: "🎶",
  start: async (m, { text, reply }) => {
    if (!text) return m.reply("⚠️ Usage: ai-songlyrics <topic>");
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY;
      const prompt = `Write original song lyrics about "${text}". Verses and chorus included.`;
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` } });
      await reply(res.data.choices[0].message.content.trim());
    } catch (e) {
      m.reply("🚫 Lyrics error: " + (e.response?.data || e.message));
    }
  }
};
