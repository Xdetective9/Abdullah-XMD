module.exports = {
  name: "eval",
  alias: [],
  desc: "Evaluate JS code (owner only!)",
  category: "owner",
  usage: "eval <js>",
  react: "🧪",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const code = args.join(" ");
    if (!code) return m.reply("⚠️ Usage: eval <js>");
    try {
      let res = eval(code); // owner only
      if (typeof res === "object") res = JSON.stringify(res, null, 2);
      return m.reply("✅ Eval result:\n" + String(res).slice(0, 4000));
    } catch (e) {
      return m.reply("🚫 Eval error: " + e.message);
    }
  }
};
