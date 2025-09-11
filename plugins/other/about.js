// plugins/other/about.js
module.exports = {
  name: "about",
  desc: "About the bot",
  category: "other",
  usage: "about",
  react: "ℹ️",
  start: async (m) => {
    m.reply(
      `🤖 *Abdullah-XMD Bot*\n` +
      `👤 Owner: Abdullah Rana\n` +
      `📞 Number: 923288055104\n` +
      `🔗 GitHub: https://github.com/Xdetective9/Abdullah-XMD.git`
    );
  },
};
