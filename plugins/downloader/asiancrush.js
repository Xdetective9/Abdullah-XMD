module.exports = {
  name: "asiancrush",
  alias: ["acrush"],
  desc: "Download dramas/movies from AsianCrush",
  category: "downloader",
  usage: "asiancrush <url>",
  react: "🎥",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: asiancrush <url>");
    m.reply("⚠️ AsianCrush support requires API integration.");
  },
};

