module.exports = {
  name: "antilongmsg",
  alias: [],
  desc: "Block spammy long messages",
  category: "group",
  usage: "antilongmsg on/off",
  react: "📏",
  start: async (m, { text }) => {
    if (text === "on") {
      global.antilongmsg = true;
      m.reply("⚔️ *Anti-Long Message Activated!* 📝 Short & clear only ⚡");
    } else if (text === "off") {
      global.antilongmsg = false;
      m.reply("✅ *Anti-Long Message Deactivated* — Speak freely again 🎤");
    }
  }
};
