module.exports = {
  name: "members",
  alias: ["listmembers"],
  desc: "List all group members",
  category: "group",
  usage: "members",
  react: "👥",
  start: async (m, { participants }) => {
    let txt = "👥 *Group Members:*\n\n";
    txt += participants.map(p => `@${p.id.split("@")[0]}`).join("\n");
    m.reply(txt, { mentions: participants.map(a => a.id) });
  }
};
