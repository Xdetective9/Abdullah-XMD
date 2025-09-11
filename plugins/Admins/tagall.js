module.exports = {
  name: "tagall",
  alias: ["tag"],
  desc: "Tag all participants in a group (group admin only)",
  category: "admin",
  usage: "tagall",
  react: "📣",
  start: async (m, ctx = {}) => {
    const { sock, isAdmin = false, isOwner = false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ Owner or group admin only.");
    if (!sock) return m.reply("❌ This command needs socket (ctx.sock).");
    try {
      // Try to fetch metadata
      const meta = await sock.groupMetadata(m.from).catch(()=>null);
      const participants = (meta?.participants || []).map(p => p.id || p.jid || p).filter(Boolean);
      if (!participants.length) return m.reply("ℹ️ Could not get group participants.");
      const text = `📣 @all — Attention!`;
      await sock.sendMessage(m.from, { text, mentions: participants });
      return m.reply("✅ Tagged all.");
    } catch (e) { return m.reply("🚫 Error (tagall): " + e.message); }
  }
};
