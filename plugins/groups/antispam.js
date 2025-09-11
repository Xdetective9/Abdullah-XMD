module.exports = {
  name: "antispam",
  desc: "Block repeated spam messages",
  category: "group",
  usage: "antispam on/off",
  react: "🚫",
  start: async (m, { text }) => {
    if (text === "on") {
      global.antispam = true;
      m.reply("🚫 Spam shield ON — Flooders will be punished ⚡");
    } else {
      global.antispam = false;
      m.reply("✅ Spam shield OFF — Free spam allowed 😹");
    }
  }
};

