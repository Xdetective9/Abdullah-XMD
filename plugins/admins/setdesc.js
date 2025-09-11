module.exports = {
  name: "setdesc",
  alias: ["setdescription"],
  desc: "Set group description (group admin only)",
  category: "admin",
  usage: "setdesc <text>",
  react: "📝",
  start: async (m, ctx = {}) => {
    const { args = [], sock, isAdmin=false, isOwner=false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ Owner or group admin only.");
    if (!sock) return m.reply("❌ This command needs socket (ctx.sock).");
    const desc = args.join(" ");
    if (!desc) return m.reply("⚠️ Usage: setdesc <text>");
    try {
      await sock.groupUpdateDescription(m.from, desc);
      return m.reply("✅ Group description updated.");
    } catch (e) { return m.reply("🚫 Error (setdesc): " + e.message); }
  }
};

