module.exports = {
  name: "demote",
  alias: [],
  desc: "Demote a group admin to member (requires socket & group)",
  category: "admin",
  usage: "demote @mention",
  react: "⬇️",
  start: async (m, ctx = {}) => {
    const { args = [], sock } = ctx;
    if (!sock) return m.reply("❌ This command needs socket (ctx.sock).");
    const jid = args[0] ? args[0].replace(/\D/g,"")+"@s.whatsapp.net" : null;
    if (!jid) return m.reply("⚠️ Usage: demote <number|@mention>");
    try {
      await sock.groupParticipantsUpdate(m.from, [jid], "demote");
      return m.reply(`✅ Demoted *${jid}*`);
    } catch (e) { return m.reply("🚫 Error (demote): " + e.message); }
  }
};
