// plugins/developer/test.js
module.exports = {
  name: "test",
  desc: "Test plugin to confirm bot is working",
  category: "developer",
  usage: "test",
  react: "✅",
  start: async (m) => {
    m.reply("✅ Bot is alive and working fine!");
  },
};
