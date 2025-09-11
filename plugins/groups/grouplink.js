module.exports = {
  name: "grouplink",
  alias: ["linkgc"],
  desc: "Get group invite link",
  category: "group",
  usage: "grouplink",
  react: "🔗",
  start: async (m, { sock }) => {
    if (!m.isGroup) return m.reply("❌ Use this in a group only.");
    const code = await sock.groupInviteCode(m.from);
    m.reply(`🔗 Group Link: https://chat.whatsapp.com/${code}`);
  }
};
