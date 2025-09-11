// plugins/developer/stats.js
const os = require("os");
module.exports = {
  name: "stats",
  desc: "Show system & bot stats",
  category: "developer",
  usage: "stats",
  react: "📊",
  start: async (m, { config }) => {
    const uptime = process.uptime();
    const mem = process.memoryUsage();
    const text = `
📊 *Bot Stats*
🖥️ Platform: ${os.type()} (${os.arch()})
💾 RAM Usage: ${(mem.rss / 1024 / 1024).toFixed(1)} MB
⏱️ Uptime: ${(uptime / 60).toFixed(1)} minutes
🤖 Bot: ${config?.botName || "XMD Bot"}
    `;
    m.reply(text);
  },
};
