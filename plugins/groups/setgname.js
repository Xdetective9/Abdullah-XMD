module.exports = {
  name: "setgname",
  alias: ["renamegc"],
  desc: "Change group name",
  category: "group",
  usage: "setgname <new name>",
  react: "✏️",
  start: async (m, { text, sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!text) return m.reply("⚠️ Provide a new name.");
    await sock.groupUpdateSubject(m.from, text);
    m.reply("✅ Group name updated.");
  }
};
