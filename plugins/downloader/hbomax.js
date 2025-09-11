module.exports = {
  name: "hbomax",
  alias: ["hbo"],
  desc: "Download from HBO Max (experimental)",
  category: "downloader",
  usage: "hbomax <url>",
  react: "🎬",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: hbomax <url>");
    m.reply("⚠️ HBO Max downloader requires API. Not available in free mode.");
  },
};
