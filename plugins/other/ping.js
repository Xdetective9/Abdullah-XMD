// plugins/other/ping.js
module.exports = {
  name: "ping",
  desc: "Check bot response time",
  category: "other",
  usage: "ping",
  react: "🏓",
  start: async (m) => {
    const start = Date.now();
    const msg = await m.reply("🏓 Pinging...");
    const end = Date.now();
    m.reply(`🏓 Pong! Response: ${end - start} ms`);
  },
};
