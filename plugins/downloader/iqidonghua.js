module.exports = {
  name: "iqidonghua",
  alias: ["iqidh"],
  desc: "Special Donghua fetcher from iQIYI",
  category: "downloader",
  usage: "iqidonghua <url>",
  react: "🐲",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: iqidonghua <url>");
    m.reply("⚠️ iQIYI Donghua plugin needs API. Placeholder only.");
  },
};
