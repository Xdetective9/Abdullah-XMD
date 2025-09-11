module.exports = {
  name: "anticall",
  alias: [],
  desc: "Block calls to bot in group",
  category: "group",
  usage: "anticall on/off",
  react: "📵",
  start: async (m, { text }) => {
    if (text === "on") {
      global.anticall = true;
      m.reply("📵 *Anti-Call Activated!* — Don’t disturb the legendary bot ⚡");
    } else if (text === "off") {
      global.anticall = false;
      m.reply("✅ *Anti-Call Disabled* — Calls won’t be blocked now 🎧");
    }
  }
};
