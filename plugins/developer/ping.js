// plugins/developer/ping.js
module.exports = {
  name: "ping",
  desc: "Check bot response time",
  category: "developer",
  usage: "ping",
  react: "🏓",
  start: async (m) => {
    const start = Date.now();
    const msg = await m.reply("🏓 Pong...");
    const end = Date.now();
    m.reply(`⏱️ Response: ${end - start}ms`);
  },
};
