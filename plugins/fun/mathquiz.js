module.exports = {
  name: "mathquiz",
  desc: "Simple math quiz",
  category: "fun",
  usage: "mathquiz",
  react: "➕",
  start: async (m) => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const answer = a + b;
    m.reply(`🧮 Solve: ${a} + ${b} = ?\n(Answer: ${answer})`);
  },
};
