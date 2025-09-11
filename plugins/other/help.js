// plugins/other/help.js
module.exports = {
  name: "help",
  desc: "Show help menu",
  category: "other",
  usage: "help",
  react: "❓",
  start: async (m) => {
    m.reply(`❓ Use *menu* to see all categories, or type a command to get help.`);
  },
};
