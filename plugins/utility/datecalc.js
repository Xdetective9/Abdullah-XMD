module.exports = {
  name: "datecalc",
  alias: ["days"],
  desc: "Calculate days between two dates",
  category: "utility",
  usage: "datecalc <date1> <date2>",
  react: "📅",
  start: async (m, { text }) => {
    const [d1, d2] = text.split(" ");
    if (!d1 || !d2) return m.reply("⚠️ Usage: datecalc <YYYY-MM-DD> <YYYY-MM-DD>");
    try {
      const diff = Math.abs(new Date(d2) - new Date(d1)) / (1000 * 60 * 60 * 24);
      m.reply(`📅 Days between: ${diff} days`);
    } catch {
      m.reply("❌ Invalid dates.");
    }
  }
};
