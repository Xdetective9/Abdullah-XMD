// plugins/other/system.js
const os = require("os");
module.exports = {
  name: "system",
  desc: "System info",
  category: "other",
  usage: "system",
  react: "💻",
  start: async (m) => {
    m.reply(
      `💻 *System Info*\n` +
      `OS: ${os.type()} ${os.release()}\nArch: ${os.arch()}\nCPU: ${os.cpus()[0].model}\nCores: ${os.cpus().length}`
    );
  },
};

