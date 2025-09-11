module.exports = {
  name: "xvideos",
  alias: ["xvd"],
  desc: "XVideos downloader",
  category: "nsfw",
  usage: "xvideos <url>",
  react: "❌",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: xvideos <url>");
    m.reply("⚠️ XVideos API required. Not bundled.");
  },
};
