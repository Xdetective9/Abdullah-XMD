const QRCode = require("qrcode");

module.exports = {
  name: "qrcode",
  alias: ["qr"],
  desc: "Generate QR code",
  category: "utility",
  usage: "qr <text>",
  react: "📷",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: qr <text>");
    const qrImage = await QRCode.toBuffer(text);
    await sendFile(m.from, qrImage, "qrcode.png", m, { caption: "🔗 QR generated" });
  }
};
