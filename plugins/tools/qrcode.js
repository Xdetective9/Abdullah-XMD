// plugins/tools/qrcode.js
const axios = require("axios");
module.exports = {
  name: "qrcode",
  desc: "Generate a QR code",
  category: "tools",
  usage: "qrcode <text>",
  react: "🔲",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: qrcode <text>");
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
    await sendFile(m.from, url, "qrcode.png", m, { caption: "🔲 QR Code Generated" });
  },
};
