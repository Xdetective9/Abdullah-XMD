module.exports = {
  name: "8ball",
  desc: "Ask the magic 8ball",
  category: "fun",
  usage: "8ball <question>",
  react: "🎱",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Ask a question!");
    const answers = [
      "Yes.", "No.", "Maybe.", "Definitely!", "I don’t think so.", "Ask later.", "Absolutely!", "Not sure."
    ];
    m.reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`);
  },
};
