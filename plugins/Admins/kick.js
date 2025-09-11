module.exports = {
  name: "kick",
  alias: ["remove"],
  desc: "Remove a member from the group (requires socket & group admin)",
  category: "admin",
  usage: "kick @mention",
  react: "👢",
  start: async (m, ctx = {}) => {
    const { args = [], sock, isOwner = false, isAdmin = false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ Owner or group admin only.");
    if (!sock) return m.reply("❌ This command needs socket (ctx.sock).");
    const jid = args[0] ? args[0].replace(/\D/g,"")+"@s.whatsapp.net" : null;
    if (!jid) return m.reply("⚠️ Usage: kick <number|@mention>");
    try {
      await sock.groupParticipantsUpdate(m.from, [jid], "remove");
      return m.reply(`✅ Kicked *${jid}*`);
    } catch (e) { return m.reply("🚫 Error (kick): " + e.message); }
  }
};
