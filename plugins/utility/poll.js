module.exports = {
  name: "poll",
  alias: [],
  desc: "Create a simple poll",
  category: "utility",
  usage: "poll Question | option1 | option2",
  react: "📊",
  start: async (m, { text }) => {
    if (!text.includes("|")) return m.reply("⚠️ Usage: poll Question | option1 | option2");
    const [question, ...options] = text.split("|").map(x => x.trim());
    m.reply(`📊 *Poll:* ${question}\n\n${options.map((o, i) => `${i + 1}. ${o}`).join("\n")}`);
  }
};
