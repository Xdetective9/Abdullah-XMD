module.exports = {
  name: "base64dec",
  desc: "Decode Base64 to text",
  category: "converter",
  usage: "base64dec <code>",
  react: "🔓",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: base64dec <code>");
    m.reply(Buffer.from(text, "base64").toString("utf8"));
  }
};

