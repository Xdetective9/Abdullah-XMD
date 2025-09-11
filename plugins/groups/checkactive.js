module.exports = {
  name: "checkactive",
  alias: ["activeusers"],
  desc: "Check active users in group",
  category: "group",
  usage: "checkactive",
  react: "📊",
  start: async (m, { participants }) => {
    const active = participants.filter(p => !p.id.includes("status"));
    m.reply(
      `📊 *Active Users:* ⚡\n` +
      active.map(u => `@${u.id.split("@")[0]}`).join("\n"),
      { mentions: active.map(a => a.id) }
    );
  }
};
