const translate = require("@vitalets/google-translate-api");

module.exports = {
  name: "translate",
  alias: ["tr"],
  desc: "Translate text",
  category: "utility",
  usage: "tr <lang> <text>",
  react: "🌍",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: tr <lang> <text>");
    const [lang, ...content] = text.split(" ");
    if (!content.length) return m.reply("⚠️ Provide text to translate.");
    const res = await translate(content.join(" "), { to: lang });
    m.reply("🔤 Translation: " + res.text);
  }
};
