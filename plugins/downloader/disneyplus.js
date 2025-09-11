module.exports = {
  name: "disneyplus",
  alias: ["disney"],
  desc: "Download movies from Disney+ (experimental)",
  category: "downloader",
  usage: "disneyplus <url>",
  react: "🏰",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: disneyplus <url>");
    m.reply("⚠️ Disney+ download support requires API integration.");
  },
};
