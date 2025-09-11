// plugins/tools/emojimix.js
const axios = require("axios");
module.exports = {
  name: "emojimix",
  desc: "Mix two emojis",
  category: "tools",
  usage: "emojimix 😍+😂",
  react: "😊",
  start: async (m, { text, sendFile }) => {
    if (!text.includes("+")) return m.reply("⚠️ Usage: emojimix emoji1+emoji2");
    try {
      const url = `https://tenor.googleapis.com/v2/featured?key=LIVDSRZULELA&q=${encodeURIComponent(text)}&limit=1`;
      const res = await axios.get(url);
      const img = res.data.results?.[0]?.media_formats?.gif?.url;
      if (!img) return m.reply("❌ Failed to mix.");
      await sendFile(m.from, img, "emojimix.gif", m, { caption: "😊 Emojimix result" });
    } catch {
      m.reply("❌ Error.");
    }
  },
};
