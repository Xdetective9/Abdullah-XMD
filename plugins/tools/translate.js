// plugins/tools/translate.js
const axios = require("axios");
module.exports = {
  name: "tr",
  alias: ["translate"],
  desc: "Translate text",
  category: "tools",
  usage: "tr <lang> <text>",
  react: "🌐",
  start: async (m, { text }) => {
    const [lang, ...words] = text.split(" ");
    if (!lang || !words.length) return m.reply("⚠️ Usage: tr <lang> <text>");
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(words.join(" "))}&langpair=en|${lang}`;
      const res = await axios.get(url);
      m.reply("🌐 " + res.data.responseData.translatedText);
    } catch {
      m.reply("❌ Translation error.");
    }
  },
};
