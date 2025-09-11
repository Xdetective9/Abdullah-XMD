const axios = require("axios");
const fs = require("fs");

module.exports = {
  name: "aitts",
  alias: ["tts", "say"],
  desc: "Convert text to speech with AI",
  category: "ai",
  usage: "aitts <text>",
  react: "🗣️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: aitts <text>");
    try {
      const res = await axios.get(`https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(text)}`, { responseType: "arraybuffer" });
      const file = `tts_${Date.now()}.mp3`;
      fs.writeFileSync(file, res.data);
      await sendFile(m.from, file, "voice.mp3", m, { caption: "🗣️ AI Voice" });
      fs.unlinkSync(file);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
