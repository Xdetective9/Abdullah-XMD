module.exports = {
  name: "youku",
  alias: ["yk"],
  desc: "Download Donghua & movies from Youku",
  category: "downloader",
  usage: "youku <url>",
  react: "🎎",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: youku <url>");
    m.reply("⚠️ Youku downloader requires API (not available in free mode).");
  },
};
