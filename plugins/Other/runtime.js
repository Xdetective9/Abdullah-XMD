// plugins/other/runtime.js
const os = require("os");
const moment = require("moment");
let uptime = () => {
  let sec = process.uptime();
  let d = Math.floor(sec / (3600 * 24));
  let h = Math.floor((sec % (3600 * 24)) / 3600);
  let m = Math.floor((sec % 3600) / 60);
  let s = Math.floor(sec % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
};
module.exports = {
  name: "runtime",
  desc: "Show bot uptime",
  category: "other",
  usage: "runtime",
  react: "⏳",
  start: async (m) => {
    m.reply(`⏳ Bot Uptime: ${uptime()}\n🖥️ Platform: ${os.platform()}`);
  },
};
