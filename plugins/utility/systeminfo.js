const os = require("os");

module.exports = {
  name: "sysinfo",
  alias: ["system"],
  desc: "System information",
  category: "utility",
  usage: "sysinfo",
  react: "💻",
  start: async (m) => {
    m.reply(`💻 System Info:\n
OS: ${os.type()} ${os.release()}
CPU: ${os.cpus()[0].model}
Cores: ${os.cpus().length}
RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB
Free RAM: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
  }
};
