const axios = require("axios");
const fs = require("fs");

module.exports = {
  name: "ai-tts",
  alias: ["tts","speak"],
  desc: "Text-to-Speech (Google Translate TTS fallback)",
  category: "ai",
  usage: "ai-tts <text>",
  react: "🔊",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: ai-tts <text>");
    try {
      // Note: This uses Google Translate TTS endpoint which is a lightweight fallback.
      // For production use, replace with a paid TTS provider and proper service key.
      const encoded = encodeURIComponent(text);
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encoded}`;
      const tmp = `tts_${Date.now()}.mp3`;
      const res = await axios.get(url, { responseType: "arraybuffer", headers: { "User-Agent": "Mozilla/5.0" } });
      fs.writeFileSync(tmp, Buffer.from(res.data));
      await sendFile(m.from, tmp, "tts.mp3", m, { caption: "🔊 Text to Speech" });
      fs.unlinkSync(tmp);
    } catch (e) {
      m.reply("🚫 TTS error: " + (e.response?.data || e.message));
    }
  }
};
