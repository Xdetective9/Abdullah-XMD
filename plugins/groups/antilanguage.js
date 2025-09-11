module.exports = {
  name: "antilanguage",
  desc: "Block bad words / abuse",
  category: "group",
  usage: "antilanguage on/off",
  react: "🛡️",
  start: async (m, { text }) => {
    if (text === "on") {
      global.antilanguage = true;
      m.reply("🛡️ *Anti-Bad Words Activated!* — Keep chat clean ✨");
    } else {
      global.antilanguage = false;
      m.reply("✅ Anti-Bad Words Disabled — Say anything 😼");
    }
  }
};
