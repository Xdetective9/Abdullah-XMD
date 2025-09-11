module.exports = {
  name: "promote",
  alias: ["makeadmin"],
  desc: "Promote a member to admin",
  category: "group",
  usage: "promote <@user>",
  react: "🆙",
  start: async (m, { mention, sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!mention[0]) return m.reply("⚠️ Tag a user.");
    await sock.groupParticipantsUpdate(m.from, [mention[0]], "promote");
    m.reply("✅ User promoted to admin.");
  }
};
