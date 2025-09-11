module.exports = {
  name: "welcome",
  alias: [],
  desc: "Welcome new members",
  category: "group",
  usage: "auto (on join)",
  react: "🎉",
  start: async (m, { participants }) => {
    for (let user of participants) {
      m.reply(
        `⚡✨ *Welcome, @${user.id.split("@")[0]}!* ✨⚡\n\n` +
        `🎊 You’ve entered the legendary squad. Respect the rules & enjoy 🔥🔥`,
        { mentions: [user.id] }
      );
    }
  }
};
