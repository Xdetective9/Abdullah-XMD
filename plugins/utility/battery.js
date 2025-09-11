module.exports = {
  name: "battery",
  alias: [],
  desc: "Check device battery status (if supported)",
  category: "utility",
  usage: "battery",
  react: "🔋",
  start: async (m, { sock }) => {
    if (!sock.user?.id) return m.reply("❌ Not supported.");
    const battery = sock.ws?.battery;
    m.reply(`🔋 Battery: ${battery?.value || "Unknown"}% | Charging: ${battery?.charging ? "⚡ Yes" : "❌ No"}`);
  }
};
