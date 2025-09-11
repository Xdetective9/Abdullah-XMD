module.exports = {
  name: "timer",
  alias: [],
  desc: "Set a countdown timer",
  category: "utility",
  usage: "timer <seconds>",
  react: "⏳",
  start: async (m, { text }) => {
    const secs = parseInt(text);
    if (isNaN(secs)) return m.reply("⚠️ Usage: timer <seconds>");
    m.reply(`⏳ Timer started for ${secs} seconds...`);
    setTimeout(() => m.reply("⏰ Time’s up!"), secs * 1000);
  }
};
