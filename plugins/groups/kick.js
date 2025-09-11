module.exports = {
  name: "kick",
  alias: ["remove"],
  desc: "Remove member from group",
  category: "group",
  usage: "kick <@user>",
  react: "👢",
  start: async (m, { mention, sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!mention[0]) return m.reply("⚠️ Tag a user.");
    await sock.groupParticipantsUpdate(m.from, [mention[0]], "remove");
    m.reply("✅ User removed.");
  }
};
