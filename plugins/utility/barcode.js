const bwipjs = require("bwip-js");

module.exports = {
  name: "barcode",
  alias: [],
  desc: "Generate barcode",
  category: "utility",
  usage: "barcode <text>",
  react: "🏷️",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: barcode <text>");
    const png = await bwipjs.toBuffer({ bcid: "code128", text, scale: 3, height: 10 });
    await m.sendFile(m.from, png, "barcode.png", m, { caption: "🏷️ Barcode" });
  }
};
