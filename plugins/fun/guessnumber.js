module.exports = {
  name: "guessnumber",
  desc: "Guess a number 1-10",
  category: "fun",
  usage: "guessnumber <number>",
  react: "🔢",
  start: async (m, { text }) => {
    const num = Math.floor(Math.random() * 10) + 1;
    if (!text) return m.reply("⚠️ Guess a number between 1 and 10!");
    if (parseInt(text) === num) return m.reply("🎉 Correct! The number was " + num);
    else return m.reply("❌ Wrong! The number was " + num);
  },
};
