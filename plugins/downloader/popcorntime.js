module.exports = {
  name: "popcorntime",
  alias: ["popcorn"],
  desc: "Download movies via PopcornTime",
  category: "downloader",
  usage: "popcorntime <movie-name>",
  react: "🍿",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: popcorntime <movie-name>");
    m.reply("⚠️ PopcornTime torrent streaming requires external API.");
  },
};
