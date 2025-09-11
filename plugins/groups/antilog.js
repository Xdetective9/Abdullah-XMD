module.exports = {
  name: "antilog",
  alias: ["antilogger"],
  desc: "Prevent bot logs & spy tools",
  category: "group",
  usage: "antilog on/off",
  react: "🕵️",
  start: async (m, { text }) => {
    if (text === "on") {
      global.antilog = true;
      m.reply("🕵️ *Anti-Logger Activated!* — No spying allowed 🔒");
    } else if (text === "off") {
      global.antilog = false;
      m.reply("✅ *Anti-Logger Disabled* — Normal mode resumed ⚡");
    }
  }
};
