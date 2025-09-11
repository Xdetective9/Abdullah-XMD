// plugins/developer/shutdown.js
module.exports = {
  name: "shutdown",
  desc: "Stop the bot (Owner only)",
  category: "developer",
  usage: "shutdown",
  react: "🛑",
  start: async (m, { isOwner }) => {
    if (!isOwner) return m.reply("🚫 Owner only.");
    m.reply("🛑 Bot shutting down...");
    process.exit(0);
  },
};
