let number = Math.floor(Math.random() * 50) + 1;
module.exports = {
  name: "guess",
  alias: [],
  desc: "Guess a number (1-50)",
  category: "group",
  usage: "guess <num>",
  react: "🔢",
  start: async (m, { text }) => {
    let guess = parseInt(text);
    if (!guess) return m.reply("⚠️ Usage: guess <number>");
    if (guess === number) {
      m.reply(`🎉 Correct! The number was ${number} 🔥`);
      number = Math.floor(Math.random() * 50) + 1;
    } else if (guess > number) {
      m.reply("⬇️ Too high, try lower!");
    } else {
      m.reply("⬆️ Too low, try higher!");
    }
  }
};

