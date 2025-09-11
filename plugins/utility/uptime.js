module.exports = {
  name: "uptime",
  alias: [],
  desc: "Check bot uptime",
  category: "utility",
  usage: "uptime",
  react: "🟢",
  start: async (m) => {
    const uptime = process.uptime();
    const hrs = Math.floor(uptime / 3600);
    const mins = Math.floor((uptime % 3600) / 60);
    const secs = Math.floor(uptime % 60);
    m.reply(`🟢 Uptime: ${hrs}h ${mins}m ${secs}s`);
  }
};
