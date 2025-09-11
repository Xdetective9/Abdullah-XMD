// plugins/tools/decodeqr.js
const axios = require("axios");
module.exports = {
  name: "decodeqr",
  desc: "Decode QR code from image",
  category: "tools",
  usage: "decodeqr <reply image>",
  react: "📷",
  start: async (m, { quoted }) => {
    if (!quoted || !quoted.message.imageMessage) return m.reply("⚠️ Reply to a QR code image.");
    try {
      const media = await m.quoted.download();
      const url = `https://api.qrserver.com/v1/read-qr-code/`;
      const formData = new FormData();
      formData.append("file", media, "qr.png");
      const res = await axios.post(url, formData, { headers: formData.getHeaders() });
      const result = res.data[0]?.symbol[0]?.data;
      if (!result) return m.reply("❌ Could not decode.");
      m.reply("📷 QR Code Content: " + result);
    } catch {
      m.reply("❌ Error decoding QR.");
    }
  },
};
