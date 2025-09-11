module.exports = {
  name: "setbye",
  desc: "Set goodbye message",
  category: "group",
  usage: "setbye <msg>",
  react: "👋",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: setbye <msg>");
    global.goodbye = text;
    m.reply("👋 Goodbye message updated!");
  }
};
