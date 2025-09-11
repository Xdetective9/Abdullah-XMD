module.exports = {
  name: "pornhub",
  alias: ["phdl"],
  desc: "PornHub video downloader",
  category: "nsfw",
  usage: "pornhub <url>",
  react: "🔞",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: pornhub <url>");
    m.reply("⚠️ PornHub API required. Not bundled.");
  },
};
