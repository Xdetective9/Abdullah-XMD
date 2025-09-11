const QRCode = require("qrcode");

module.exports = {
  name: "toqr",
  desc: "Convert text to QR Code",
  category: "converter",
  usage: "toqr <text>",
  react: "🔳",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: toqr <text>");
    const out = `qr_${Date.now()}.png`;
    await QRCode.toFile(out, text);
    sendFile(m.from, out, "qr.png", m);
  }
};
