// plugins/owner/leave.js
module.exports = {
  name: "leave",
  desc: "Make the bot leave the group (owner only)",
  category: "owner",
  usage: "leave",
  react: "👋",
  start: async (m, { bot, isOwner }) => {
    try {
      if (!isOwner) return m.reply("🚫 Owner only.");
      if (!m.isGroup) return m.reply("⚠️ This command is for groups.");
      await bot.groupLeave(m.from);
      // No reply needed (bot leaves), but attempt to notify
      try { await bot.sendMessage(m.from, { text: "✋ Bot is leaving..." }); } catch (_) {}
    } catch (e) {
      m.reply("🚫 Error in leave: " + (e.message || e));
    }
  },
};
