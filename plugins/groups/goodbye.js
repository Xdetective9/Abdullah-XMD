module.exports = {
  name: "goodbye",
  alias: [],
  desc: "Farewell to members leaving",
  category: "group",
  usage: "auto (on leave)",
  react: "👋",
  start: async (m, { participants }) => {
    for (let user of participants) {
      m.reply(
        `😔 *Goodbye, @${user.id.split("@")[0]}* 💔\n\n` +
        `🌌 Another star left our galaxy… Stay legendary, wherever you go ✨`,
        { mentions: [user.id] }
      );
    }
  }
};
