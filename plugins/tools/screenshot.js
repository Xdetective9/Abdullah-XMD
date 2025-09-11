// plugins/tools/screenshot.js
const axios = require("axios");
module.exports = {
  name: "ss",
  alias: ["screenshot"],
  desc: "Take a webpage screenshot",
  category: "tools",
  usage: "ss <url>",
  react: "📸",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: ss <url>");
    try {
      const url = `https://image.thum.io/get/fullpage/${encodeURIComponent(text)}`;
      await sendFile(m.from, url, "screenshot.png", m, { caption: "📸 Screenshot" });
    } catch {
      m.reply("❌ Failed to take screenshot.");
    }
  },
};
