const axios = require("axios");

module.exports = {
  name: "ai-meme",
  alias: ["memegen","meme"],
  desc: "Create meme via memegen.link",
  category: "ai",
  usage: "ai-meme <template> | <top text> | <bottom text>\nExample: ai-meme distracted-boyfriend|me|work",
  react: "😂",
  start: async (m, { text, sendFile }) => {
    if (!text || !text.includes("|")) return m.reply("⚠️ Usage: ai-meme <template>|<top>|<bottom>");
    try {
      const [tmpl, top, bottom] = text.split("|").map(s => encodeURIComponent(s.trim()));
      const url = `https://api.memegen.link/images/${tmpl}/${top}/${bottom}.png`;
      await sendFile(m.from, url, "meme.png", m, { caption: "😂 Meme generated" });
    } catch (e) {
      m.reply("🚫 Meme error: " + (e.response?.data || e.message));
    }
  }
};
