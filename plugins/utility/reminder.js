module.exports = {
  name: "reminder",
  alias: ["remind"],
  desc: "Set reminder",
  category: "utility",
  usage: "remind <minutes> <text>",
  react: "⏰",
  start: async (m, { text }) => {
    const [minutes, ...msg] = text.split(" ");
    if (!minutes || !msg.length) return m.reply("⚠️ Usage: remind <minutes> <text>");
    m.reply(`⏰ Reminder set for ${minutes} minutes.`);
    setTimeout(() => {
      m.reply(`🔔 Reminder: ${msg.join(" ")}`);
    }, parseInt(minutes) * 60000);
  }
};
