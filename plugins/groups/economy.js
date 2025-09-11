let coins = {};
module.exports = {
  name: "balance",
  alias: ["wallet"],
  desc: "Check your coin balance",
  category: "group",
  usage: "balance",
  react: "💰",
  start: async (m) => {
    const user = m.sender;
    if (!coins[user]) coins[user] = 100; 
    m.reply(`💰 *Balance*\n👤 @${user.split("@")[0]}\nCoins: ${coins[user]}`, { mentions: [user] });
  }
};
