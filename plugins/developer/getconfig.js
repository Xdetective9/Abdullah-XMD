// plugins/developer/getconfig.js
module.exports = {
  name: "getconfig",
  desc: "Get current bot config values",
  category: "developer",
  usage: "getconfig",
  react: "⚙️",
  start: async (m, { config, isOwner }) => {
    if (!isOwner) return m.reply("🚫 Owner only.");
    m.reply("⚙️ *Current Config:*\n```" + JSON.stringify(config, null, 2) + "```");
  },
};
