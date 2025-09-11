// plugins/other/menu.js
module.exports = {
  name: "menu",
  desc: "Show main menu",
  category: "other",
  usage: "menu",
  react: "📜",
  start: async (m) => {
    m.reply(
      `📜 *Bot Main Menu*\n\n` +
      `🔻 Downloader\n` +
      `🧠 AI\n` +
      `🛠️ Tools\n` +
      `🎮 Fun & Games\n` +
      `👥 Group\n` +
      `🎴 Converter\n` +
      `🔍 Search\n` +
      `⚡ Utility\n` +
      `🔑 Admin/Owner\n` +
      `👨‍💻 Developer\n` +
      `📂 Other`
    );
  },
};
