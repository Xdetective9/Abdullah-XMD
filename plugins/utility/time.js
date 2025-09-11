module.exports = {
  name: "time",
  alias: ["clock"],
  desc: "Show current time",
  category: "utility",
  usage: "time",
  react: "⏱️",
  start: async (m) => {
    const now = new Date();
    m.reply("⏰ Current Time: " + now.toLocaleString());
  }
};
