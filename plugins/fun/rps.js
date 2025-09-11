module.exports = {
  name: "rps",
  desc: "Play rock-paper-scissors",
  category: "fun",
  usage: "rps <rock/paper/scissors>",
  react: "✊",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Choose rock, paper, or scissors!");
    const choices = ["rock", "paper", "scissors"];
    const bot = choices[Math.floor(Math.random() * choices.length)];
    const user = text.toLowerCase();
    if (!choices.includes(user)) return m.reply("⚠️ Invalid choice!");
    if (bot === user) return m.reply(`🤝 It's a tie! I also chose ${bot}.`);
    if (
      (user === "rock" && bot === "scissors") ||
      (user === "paper" && bot === "rock") ||
      (user === "scissors" && bot === "paper")
    ) return m.reply(`🎉 You win! I chose ${bot}.`);
    else return m.reply(`😈 I win! I chose ${bot}.`);
  },
};
