module.exports = {
  name: "antilink",
  alias: [],
  desc: "Prevent members from sending group links",
  category: "group",
  usage: "antilink on/off",
  react: "🚫",
  start: async (m, { text, sock }) => {
    if (text === "on") {
      global.antilink = true;
      return m.reply("🛡️ *Anti-Link Activated!* 🚫 No external links allowed here ⚡");
    } else if (text === "off") {
      global.antilink = false;
      return m.reply("✅ *Anti-Link Deactivated* — Freedom is back ✨");
    } else {
      return m.reply("⚠️ Usage: antilink on/off");
    }
  }
};
