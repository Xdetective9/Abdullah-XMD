// plugins/developer/eval.js
module.exports = {
  name: "eval",
  desc: "Run JavaScript code (Owner only)",
  category: "developer",
  usage: "eval <code>",
  react: "💻",
  start: async (m, { args, isOwner }) => {
    if (!isOwner) return m.reply("🚫 Owner only.");
    const code = args.join(" ");
    if (!code) return m.reply("⚠️ Provide code to evaluate.");
    try {
      let result = eval(code);
      if (typeof result !== "string") result = require("util").inspect(result);
      m.reply("✅ Result:\n```" + result + "```");
    } catch (e) {
      m.reply("❌ Error:\n" + e.message);
    }
  },
};
