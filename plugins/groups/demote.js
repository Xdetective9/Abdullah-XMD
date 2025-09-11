module.exports = {
  name: "demote",
  alias: ["removeadmin"],
  desc: "Demote an admin to member",
  category: "group",
  usage: "demote <@user>",
  react: "🔽",
  start: async (m, { mention, sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!mention[0]) return m.reply("⚠️ Tag a user.");
    await sock.groupParticipantsUpdate(m.from, [mention[0]], "demote");
    m.reply("✅ User demoted.");
  }
};
