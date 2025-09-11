-module.exports = {
  name: "antidelete",
  alias: [],
  desc: "Prevent deleted messages (show deleted msg again)",
  category: "group",
  usage: "antidelete on/off",
  react: "🕰️",
  start: async (m, { text }) => {
    if (text === "on") {
      global.antidelete = true;
      m.reply("🛡️ *Anti-Delete Activated!* ✨ Deleted messages will rise from ashes 🔥");
    } else if (text === "off") {
      global.antidelete = false;
      m.reply("✅ *Anti-Delete Disabled* — Let people delete freely 🗑️");
    }
  }
};
