let levels = {};
module.exports = {
  name: "level",
  alias: ["xp"],
  desc: "Check your level",
  category: "group",
  usage: "level",
  react: "⭐",
  start: async (m) => {
    const user = m.sender;
    if (!levels[user]) levels[user] = { xp: 0, level: 1 };
    m.reply(`⭐ *Level Status* ⭐\n\n👤 @${user.split("@")[0]}\n🔹 Level: ${levels[user].level}\n🔸 XP: ${levels[user].xp}`, { mentions: [user] });
  }
};
