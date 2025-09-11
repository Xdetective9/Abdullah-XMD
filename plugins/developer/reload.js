// plugins/developer/reload.js
module.exports = {
  name: "reload",
  desc: "Reload plugins without restarting",
  category: "developer",
  usage: "reload",
  react: "♻️",
  start: async (m, { isOwner, reloadPlugins }) => {
    if (!isOwner) return m.reply("🚫 Owner only.");
    if (typeof reloadPlugins === "function") {
      await reloadPlugins();
      m.reply("🔄 Plugins reloaded.");
    } else {
      m.reply("⚠️ Reload not supported in this setup.");
    }
  },
};
