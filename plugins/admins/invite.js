// plugins/admin/invite.js
module.exports = {
  name: "invite",
  desc: "Get group invite link",
  category: "admin",
  usage: "invite",
  react: "🔗",
  start: async (m, { bot, isAdmin }) => {
    try {
      if (!m.isGroup) return m.reply("⚠️ Group only.");
      if (!isAdmin) return m.reply("🚫 Only admins can use this.");
      // Some Baileys versions: const code = await bot.groupInviteCode(groupId)
      // Fallback: try bot.groupInviteCode or bot.groupGetInviteLink
      let code;
      try { code = await bot.groupInviteCode(m.from); } catch (_) {
        try { const res = await bot.groupGetInviteLink(m.from); code = res?.code || res?.invite; } catch (e) {}
      }
      if (!code) return m.reply("❌ Unable to fetch invite link.");
      m.reply("🔗 Group Invite Link:\nhttps://chat.whatsapp.com/" + code);
    } catch (e) {
      m.reply("🚫 Error in invite: " + (e.message || e));
    }
  },
};
