module.exports = {
  name: "admins",
  alias: ["listadmins"],
  desc: "List all admins",
  category: "group",
  usage: "admins",
  react: "🛡️",
  start: async (m, { participants }) => {
    const admins = participants.filter(p => p.admin).map(p => `@${p.id.split("@")[0]}`);
    m.reply("🛡️ Group Admins:\n" + admins.join("\n"), { mentions: admins.map(a => a + "@s.whatsapp.net") });
  }
};

