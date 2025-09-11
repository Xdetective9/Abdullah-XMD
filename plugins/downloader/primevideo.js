module.exports = {
  name: "primevideo",
  alias: ["prime"],
  desc: "Download movies from Amazon Prime (experimental)",
  category: "downloader",
  usage: "primevideo <url>",
  react: "📦",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: primevideo <url>");
    m.reply("⚠️ Prime Video support not available. Needs API.");
  },
};
