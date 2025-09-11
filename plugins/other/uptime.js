// plugins/other/uptime.js
module.exports = {
  name: "uptime",
  desc: "Alias for runtime",
  category: "other",
  usage: "uptime",
  react: "⏱️",
  start: async (m) => {
    m.reply("Use *runtime* to check uptime ⏱️");
  },
};
