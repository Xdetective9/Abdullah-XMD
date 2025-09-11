module.exports = {
  name: "setgdesc",
  alias: ["changedesc"],
  desc: "Change group description",
  category: "group",
  usage: "setgdesc <new description>",
  react: "📝",
  start: async (m, { text, sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!text) return m.reply("⚠️ Provide description text.");
    await sock.groupUpdateDescription(m.from, text);
    m.reply("✅ Group description updated.");
  }
};
