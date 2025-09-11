// plugins/tools/removebg.js
const axios = require("axios");
module.exports = {
  name: "removebg",
  desc: "Remove image background",
  category: "tools",
  usage: "removebg <reply image>",
  react: "🖼️",
  start: async (m, { quoted, sendFile }) => {
    if (!quoted || !quoted.message.imageMessage) return m.reply("⚠️ Reply to an image.");
    try {
      const media = await m.quoted.download();
      const url = "https://api.remove.bg/v1.0/removebg";
      m.reply("⏳ Background removing not fully setup. Add your REMOVE_BG_API_KEY in .env.");
    } catch {
      m.reply("❌ Error removing bg.");
    }
  },
};
