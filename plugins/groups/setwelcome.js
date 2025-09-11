module.exports = {
  name: "setwelcome",
  desc: "Set welcome message",
  category: "group",
  usage: "setwelcome <msg>",
  react: "👋",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: setwelcome <msg>");
    global.welcome = text;
    m.reply("👋 Welcome message updated!");
  }
};
