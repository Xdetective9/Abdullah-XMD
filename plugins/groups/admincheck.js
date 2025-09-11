module.exports = {
  name: "admins",
  desc: "List all admins",
  category: "group",
  usage: "admins",
  react: "👑",
  start: async (m, { participants }) => {
    let admins = participants.filter(p => p.admin);
    let msg = "👑 *Group Admins* 👑\n\n";
    msg += admins.map(a => `@${a.id.split("@")[0]}`).join("\n");
    m.reply(msg, { mentions: admins.map(a => a.id) });
  }
};
