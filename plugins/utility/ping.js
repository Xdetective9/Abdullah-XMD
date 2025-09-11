module.exports = {
  name: "ping",
  alias: ["p"],
  desc: "Check bot response time",
  category: "utility",
  usage: "ping",
  react: "🏓",
  start: async (m) => {
    const start = Date.now();
    await m.reply("🏓 Pong!");
    const end = Date.now();
    m.reply(`⏱️ Response Time: ${end - start}ms`);
  }
};
