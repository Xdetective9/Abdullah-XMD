module.exports = {
  name: "promote",
  alias: [],
  desc: "Promote a group member to admin (requires socket & group)",
  category: "admin",
  usage: "promote @mention",
  react: "⬆️",
  start: async (m, ctx = {}) => {
    const { args = [], sock } = ctx;
    if (!sock) return m.reply("❌ This command needs socket (ctx.sock).");
    const jid = args[0] ? args[0].replace(/\D/g,"")+"@s.whatsapp.net" : null;
    if (!jid) return m.reply("⚠️ Usage: promote <number|@mention>");
    try {
      // baileys groupParticipantsUpdate: (jid, participants, action)
      await sock.groupParticipantsUpdate(m.from, [jid], "promote");
      return m.reply(`✅ Promoted *${jid}*`);
    } catch (e) { return m.reply("🚫 Error (promote): " + e.message); }
  }
};
