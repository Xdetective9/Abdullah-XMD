const axios = require("axios");

module.exports = {
  name: "stack",
  alias: ["stackoverflow"],
  desc: "Search StackOverflow",
  category: "utility",
  usage: "stack <query>",
  react: "💡",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: stack <query>");
    try {
      const res = await axios.get(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodeURIComponent(text)}&site=stackoverflow`);
      const top = res.data.items[0];
      m.reply(`💡 Top Result:\n🔗 ${top.title}\n👉 ${top.link}`);
    } catch {
      m.reply("❌ No results found.");
    }
  }
};
