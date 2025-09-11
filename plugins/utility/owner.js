module.exports = {
  name: "owner",
  alias: [],
  desc: "Show bot owner info",
  category: "utility",
  usage: "owner",
  react: "👑",
  start: async (m) => {
    m.reply("👑 Bot Owner: +1234567890\n💻 GitHub: https://github.com/owner\n🌐 Website: https://example.com");
  }
};
