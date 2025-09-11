const gTTS = require("gtts");
const fs = require("fs");

module.exports = {
  name: "txt2speech",
  desc: "Convert text to speech (MP3)",
  category: "converter",
  usage: "txt2speech <text>",
  react: "🔊",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: txt2speech <text>");
    const out = `speech_${Date.now()}.mp3`;
    const gtts = new gTTS(text, "en");
    gtts.save(out, () => sendFile(m.from, out, "speech.mp3", m));
  }
};
