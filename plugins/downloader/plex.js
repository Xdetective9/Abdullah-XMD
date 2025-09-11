module.exports = {
  name: "plex",
  alias: ["plexdl"],
  desc: "Fetch movies/shows from Plex (requires Plex account)",
  category: "downloader",
  usage: "plex <url>",
  react: "📺",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: plex <url>");
    m.reply("⚠️ Plex plugin requires API key & login. Not public.");
  },
};
