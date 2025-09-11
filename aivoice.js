const axios = require("axios");
const fs = require("fs");

module.exports = {
  name: "aivoice",
  alias: ["cevoice"],
  desc: "Generate AI celebrity voice",
  category: "ai",
  usage: "aivoice <text>",
  react: "🎤",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: aivoice <text>");
    try {
      const res = await axios.get(`https://api.streamelements.com/kappa/v2/speech?voice=Joey&text=${encodeURIComponent(text)}`, { responseType: "arraybuffer" });
      const file = `voice_${Date.now()}.mp3`;
      fs.writeFileSync(file, res.data);
      await sendFile(m.from, file, "voice.mp3", m, { caption: "🎤 AI Voice" });
      fs.unlinkSync(file);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
