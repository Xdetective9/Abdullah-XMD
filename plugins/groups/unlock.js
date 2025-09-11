module.exports = {
  name: "unlock",
  alias: ["gcunlock"],
  desc: "Unlock group (allow adding/removing members)",
  category: "group",
  usage: "unlock",
  react: "🔓",
  start: async (m, { sock }) => {
    await sock.groupSettingUpdate(m.from, "unlocked");
    m.reply("🔓 *Group Unlocked!* — Doors are open again 🚪✨");
  }
};
