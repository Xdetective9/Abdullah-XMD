// plugins/search/pinterest-search.js
const axios = require("axios");
module.exports = {
  name: "pinsearch",
  desc: "Search Pinterest images",
  category: "search",
  usage: "pinsearch <query>",
  react: "📌",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: pinsearch <query>");
    try {
      const url = `https://api.popcat.xyz/pinterest?q=${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const img = res.data[0];
      await sendFile(m.from, img, "pin.jpg", m, { caption: `📌 Pinterest: ${text}` });
    } catch {
      m.reply("❌ No results.");
    }
  },
};
