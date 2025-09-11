// plugins/tools/calc.js
module.exports = {
  name: "calc",
  desc: "Calculate math expressions",
  category: "tools",
  usage: "calc <expression>",
  react: "🧮",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: calc 2+2*5");
    try {
      const result = eval(text);
      m.reply(`🧮 Result: ${result}`);
    } catch {
      m.reply("❌ Invalid expression.");
    }
  },
};
