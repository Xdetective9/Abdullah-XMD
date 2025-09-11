const axios = require("axios");
module.exports = {
  name: "trivia",
  desc: "Play trivia",
  category: "fun",
  usage: "trivia",
  react: "❓",
  start: async (m) => {
    try {
      const res = await axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
      const q = res.data.results[0];
      m.reply(`❓ *${q.question}*\nA) ${q.incorrect_answers[0]}\nB) ${q.incorrect_answers[1]}\nC) ${q.incorrect_answers[2]}\nD) ${q.correct_answer}`);
    } catch {
      m.reply("❌ Couldn't fetch trivia.");
    }
  },
};
