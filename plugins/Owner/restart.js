module.exports = {
  name: "restart",
  alias: ["reboot"],
  desc: "Restart the bot (owner only)",
  category: "owner",
  usage: "restart",
  react: "🔁",
  start: async (m, ctx = {}) => {
    const { isOwner = false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    try {
      m.reply("♻️ Restarting bot...");
      process.exit(0); // Pterodactyl / system will restart the process
    } catch (e) { return m.reply("🚫 Error (restart): " + e.message); }
  }
};
