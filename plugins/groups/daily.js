let coins = {};
module.exports = {
  name: "daily",
  alias: [],
  desc: "Get daily reward",
  category: "group",
  usage: "daily",
  react: "🎁",
  start: async (m) => {
    const user = m.sender;
    if (!coins[user]) coins[user] = 0;
    coins[user] += 50;
    m.reply(`🎁 *Daily Reward*\n+50 coins added 💰\nCurrent Balance: ${coins[user]}`);
  }
};
