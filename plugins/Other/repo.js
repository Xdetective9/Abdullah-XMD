// plugins/other/repo.js
module.exports = {
  name: "repo",
  desc: "Show bot GitHub repository",
  category: "other",
  usage: "repo",
  react: "📦",
  start: async (m) => {
    m.reply(`📦 Abdullah-XMD Repository:\nhttps://github.com/Xdetective9/Abdullah-XMD.git`);
  },
};
