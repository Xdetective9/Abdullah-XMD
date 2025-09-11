module.exports = {
  name: "dice",
  desc: "Roll a dice",
  category: "fun",
  usage: "dice",
  react: "🎲",
  start: async (m) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    m.reply(`🎲 You rolled a *${roll}*`);
  },
};
