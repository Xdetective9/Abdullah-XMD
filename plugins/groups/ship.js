module.exports = {
  name: "ship",
  alias: [],
  desc: "Match two members ❤️",
  category: "group",
  usage: "ship @user1 @user2",
  react: "💘",
  start: async (m, { mention }) => {
    if (mention.length < 2) return m.reply("⚠️ Tag two people!");
    const rate = Math.floor(Math.random() * 101);
    m.reply(`💘 *Love Calculator* 💘\n\n@${mention[0].split("@")[0]} ❤️ @${mention[1].split("@")[0]}\nCompatibility: ${rate}% 🔥`, { mentions: mention });
  }
};
