module.exports = {
  name: "base64enc",
  desc: "Encode text to Base64",
  category: "converter",
  usage: "base64enc <text>",
  react: "🔐",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: base64enc <text>");
    m.reply(Buffer.from(text).toString("base64"));
  }
};
