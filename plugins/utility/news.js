const axios = require("axios");

module.exports = {
  name: "news",
  alias: [],
  desc: "Fetch latest news headlines",
  category: "utility",
  usage: "news",
  react: "📰",
  start: async (m) => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`);
      const articles = res.data.articles.slice(0, 5).map((a, i) => `${i + 1}. ${a.title}`).join("\n");
      m.reply("📰 Latest News:\n\n" + articles);
    } catch {
      m.reply("❌ Failed to fetch news.");
    }
  }
};
