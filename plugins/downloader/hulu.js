module.exports = {
  name: "hulu",
  alias: ["hulu-dl"],
  desc: "Download movies/dramas from Hulu (experimental)",
  category: "downloader",
  usage: "hulu <url>",
  react: "📡",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: hulu <url>");
    m.reply("⚠️ Hulu downloader is not fully supported yet. Needs API access.");
  },
};
