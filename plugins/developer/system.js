// plugins/developer/system.js
const os = require("os");
module.exports = {
  name: "system",
  desc: "Show system information",
  category: "developer",
  usage: "system",
  react: "🖥️",
  start: async (m) => {
    const text = `
🖥️ *System Info*
Host: ${os.hostname()}
OS: ${os.type()} ${os.release()}
CPU: ${os.cpus()[0].model}
Cores: ${os.cpus().length}
RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)} GB
Free RAM: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(1)} GB
    `;
    m.reply(text);
  },
};
