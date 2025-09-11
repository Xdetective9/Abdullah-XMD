let coins = {};
module.exports = {
  name: "gamble",
  alias: [],
  desc: "Gamble your coins",
  category: "group",
  usage: "gamble <amount>",
  react: "🎲",
  start: async (m, { text }) => {
    const user = m.sender;
    let amt = parseInt(text);
    if (!amt || amt <= 0) return m.reply("⚠️ Usage: gamble <amount>");
    if ((coins[user] || 0) < amt) return m.reply("❌ Not enough coins!");
    let win = Math.random() > 0.5;
    coins[user] = (coins[user] || 0) + (win ? amt : -amt);
    m.reply(win ? `🎲 You WON! +${amt} 💰` : `🎲 You lost ${amt} 💸`);
  }
};
