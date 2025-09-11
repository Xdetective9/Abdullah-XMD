module.exports = {
  name: "tagall",
  alias: ["mentionall"],
  desc: "Tag all group members",
  category: "group",
  usage: "tagall",
  react: "📢",
  start: async (m, { participants }) => {
    let txt = "📢 *Tag All Members:*\n\n";
    txt += participants.map(p => `@${p.id.split("@")[0]}`).join(" ");
    m.reply(txt, { mentions: participants.map(a => a.id) });
  }
};
