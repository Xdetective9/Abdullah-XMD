// plugins/tools/tts.js
const gTTS = require("gtts");
module.exports = {
  name: "tts",
  desc: "Text to speech",
  category: "tools",
  usage: "tts <text>",
  react: "🗣️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: tts <text>");
    try {
      const tts = new gTTS(text, "en");
      const filePath = "./tts.mp3";
      tts.save(filePath, async () => {
        await sendFile(m.from, filePath, "tts.mp3", m, { caption: "🗣️ TTS Generated" });
      });
    } catch {
      m.reply("❌ Failed to generate voice.");
    }
  },
};
