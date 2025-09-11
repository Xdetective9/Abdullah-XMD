// plugins/other/botstatus.js
const os = require("os");
module.exports = {
  name: "botstatus",
  desc: "Check bot system status",
  category: "other",
  usage: "botstatus",
  react: "📊",
  start: async (m) => {
    const used = process.memoryUsage();
    m.reply(
      `📊 *Bot Status*\n` +
      `RAM: ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n` +
      `CPU: ${os.cpus()[0].model}\nCores: ${os.cpus().length}`
    );
  },
};
