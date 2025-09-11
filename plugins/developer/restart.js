// plugins/developer/restart.js
module.exports = {
  name: "restart",
  desc: "Restart the bot (Owner only, needs PM2/forever)",
  category: "developer",
  usage: "restart",
  react: "🔄",
  start: async (m, { isOwner }) => {
    if (!isOwner) return m.reply("🚫 Owner only.");
    m.reply("🔄 Restarting bot...");
    process.exit(1);
  },
};
