module.exports = {
  name: "unmute",
  alias: ["open"],
  desc: "Unmute group (everyone can chat)",
  category: "group",
  usage: "unmute",
  react: "🔓",
  start: async (m, { sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    await sock.groupSettingUpdate(m.from, "not_announcement");
    m.reply("🔓 Group unmuted (everyone can chat).");
  }
};
