module.exports = {
  name: "calc",
  alias: ["calculate", "calculator"],
  desc: "Calculate math expressions",
  category: "utility",
  usage: "calc <expression>",
  react: "🧮",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: calc <expression>");
    try {
      const result = eval(text);
      m.reply(`🧮 Result: ${result}`);
    } catch {
      m.reply("❌ Invalid expression.");
    }
  }
};
