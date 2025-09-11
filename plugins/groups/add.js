module.exports = {
  name: "add",
  alias: [],
  desc: "Add user to group",
  category: "group",
  usage: "add <number>",
  react: "➕",
  start: async (m, { text, sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!text) return m.reply("⚠️ Provide number (e.g., 923xxxxxxxx).");
    await sock.groupParticipantsUpdate(m.from, [text + "@s.whatsapp.net"], "add");
    m.reply("✅ User added.");
  }
};
