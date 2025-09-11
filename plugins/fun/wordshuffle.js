module.exports = {
  name: "wordshuffle",
  desc: "Guess the shuffled word",
  category: "fun",
  usage: "wordshuffle",
  react: "🔀",
  start: async (m) => {
    const words = ["javascript", "anime", "meme", "plugin", "whatsapp"];
    const word = words[Math.floor(Math.random() * words.length)];
    const shuffled = word.split("").sort(() => 0.5 - Math.random()).join("");
    m.reply(`🔀 Unscramble this word: *${shuffled}*\n(Answer: ${word})`);
  },
};
