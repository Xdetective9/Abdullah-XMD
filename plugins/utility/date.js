module.exports = {
  name: "date",
  alias: ["today"],
  desc: "Show today’s date",
  category: "utility",
  usage: "date",
  react: "📅",
  start: async (m) => {
    const today = new Date();
    m.reply("📅 Today: " + today.toDateString());
  }
};
