const Jimp = require("jimp");
const QrCode = require("qrcode-reader");

module.exports = {
  name: "fromqr",
  desc: "Decode QR from image",
  category: "converter",
  usage: "fromqr (reply to QR image)",
  react: "📷",
  start: async (m, { media }) => {
    if (!media) return m.reply("⚠️ Reply to a QR image!");
    const img = await Jimp.read(media);
    const qr = new QrCode();
    qr.callback = (err, val) => {
      if (err || !val) return m.reply("❌ No QR detected.");
      m.reply("✅ QR Data: " + val.result);
    };
    qr.decode(img.bitmap);
  }
};
