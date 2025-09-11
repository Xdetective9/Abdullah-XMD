module.exports = {
  name: "clean",
  alias: ["purge"],
  desc: "Delete all bot messages in group",
  category: "group",
  usage: "clean",
  react: "🧹",
  start: async (m, { sock }) => {
    const msgs = Object.keys(global.store.messages[m.from] || {});
    for (let id of msgs) {
      try {
        await sock.sendMessage(m.from, { delete: { remoteJid: m.from, id, fromMe: true } });
      } catch {}
    }
    m.reply("🧹 *Group Cleaned!* ✨ All bot messages deleted.");
  }
};
