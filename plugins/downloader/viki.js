module.exports = {
  name: "viki",
  alias: ["vikidl"],
  desc: "Download dramas/anime from Viki",
  category: "downloader",
  usage: "viki <url>",
  react: "🌏",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: viki <url>");
    m.reply("⚠️ Viki download requires premium API.");
  },
};
