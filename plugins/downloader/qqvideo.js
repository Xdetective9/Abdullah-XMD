module.exports = {
  name: "qqvideo",
  alias: ["qqv"],
  desc: "Download from Tencent QQ Video (Donghua/Drama)",
  category: "downloader",
  usage: "qqvideo <url>",
  react: "💠",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: qqvideo <url>");
    m.reply("⚠️ QQ Video support is limited. Needs API access.");
  },
};
