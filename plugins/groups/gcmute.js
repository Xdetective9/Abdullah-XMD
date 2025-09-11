module.exports = {
  name: "gcmute",
  alias: [],
  desc: "Mute the group for a set time",
  category: "group",
  usage: "gcmute <minutes>",
  react: "🔕",
  start: async (m, { text, sock }) => {
    let mins = parseInt(text);
    if (!mins) return m.reply("⚠️ Usage: gcmute <minutes>");
    await sock.groupSettingUpdate(m.from, "announcement");
    m.reply(`🔕 Group muted for ${mins} minutes ⏳`);
    setTimeout(async () => {
      await sock.groupSettingUpdate(m.from, "not_announcement");
      m.reply("🔔 Group unmuted automatically ✨");
    }, mins * 60000);
  }
};
