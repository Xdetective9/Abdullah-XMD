module.exports = {
  name: "coinflip",
  desc: "Flip a coin",
  category: "fun",
  usage: "coinflip",
  react: "🪙",
  start: async (m) => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    m.reply(`🪙 Coin landed on: *${result}*`);
  },
};
