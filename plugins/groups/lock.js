module.exports = {
  name: "lock",
  alias: ["gclock"],
  desc: "Lock group (no one can add/remove members)",
  category: "group",
  usage: "lock",
  react: "🔒",
  start: async (m, { sock }) => {
    await sock.groupSettingUpdate(m.from, "locked");
    m.reply("🔒 *Group Locked!* — No entry, no exit 🚷");
  }
};
