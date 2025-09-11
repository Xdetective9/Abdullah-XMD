module.exports = {
  name: "autosticker",
  alias: [],
  desc: "Convert every image to sticker automatically",
  category: "group",
  usage: "autosticker on/off",
  react: "🎭",
  start: async (m, { text }) => {
    if (text === "on") {
      global.autosticker = true;
      m.reply("🎭 *Auto-Sticker Mode ON!* — Every pic = Sticker ⚡");
    } else if (text === "off") {
      global.autosticker = false;
      m.reply("✅ *Auto-Sticker Mode OFF* — Normal media mode 🎥");
    }
  }
};
