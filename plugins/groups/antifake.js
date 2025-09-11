module.exports = {
  name: "antifake",
  alias: [],
  desc: "Block fake numbers from joining",
  category: "group",
  usage: "antifake on/off",
  react: "🚷",
  start: async (m, { text }) => {
    if (text === "on") {
      global.antifake = true;
      m.reply("🚷 *Anti-Fake Activated!* — Only real numbers allowed ⚡");
    } else if (text === "off") {
      global.antifake = false;
      m.reply("✅ *Anti-Fake Disabled* — No restrictions 🌀");
    }
  }
};
