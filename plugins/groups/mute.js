module.exports = {
  name: "mute",
  alias: ["close"],
  desc: "Mute group (only admins can send messages)",
  category: "group",
  usage: "mute",
  react: "🔒",
  start: async (m, { sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    await sock.groupSettingUpdate(m.from, "announcement");
    m.reply("🔒 Group muted (admins only).");
  }
};
