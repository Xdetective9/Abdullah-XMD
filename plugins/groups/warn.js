let warns = {};
module.exports = {
  name: "warn",
  alias: [],
  desc: "Warn group members",
  category: "group",
  usage: "warn <@user>",
  react: "⚠️",
  start: async (m, { mention }) => {
    if (!mention[0]) return m.reply("⚠️ Tag someone to warn.");
    const user = mention[0];
    warns[user] = (warns[user] || 0) + 1;
    m.reply(
      `⚠️ @${user.split("@")[0]} — Warning ${warns[user]}/3 ⚡\n` +
      `🔥 Behave or you’ll be kicked out!`,
      { mentions: [user] }
    );
    if (warns[user] >= 3) {
      m.reply(`❌ @${user.split("@")[0]} kicked due to 3 warnings!`, { mentions: [user] });
    }
  }
};
