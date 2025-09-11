module.exports = {
  name: "tempmute",
  desc: "Mute group for specific time",
  category: "group",
  usage: "tempmute <minutes>",
  react: "🔇",
  start: async (m, { text, sock }) => {
    let mins = parseInt(text);
    if (!mins) return m.reply("⚠️ Usage: tempmute <minutes>");
    await sock.groupSettingUpdate(m.from, "announcement");
    m.reply(`🔇 Group muted for ${mins} minutes!`);
    setTimeout(async () => {
      await sock.groupSettingUpdate(m.from, "not_announcement");
      m.reply("🔊 Group unmuted automatically!");
    }, mins * 60000);
  }
};
