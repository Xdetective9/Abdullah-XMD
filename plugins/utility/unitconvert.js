module.exports = {
  name: "unitconvert",
  alias: ["uc"],
  desc: "Convert units (km-m, kg-lb etc.)",
  category: "utility",
  usage: "uc <value><unit> to <unit>",
  react: "📏",
  start: async (m, { text }) => {
    if (!text.includes("to")) return m.reply("⚠️ Usage: uc <value><unit> to <unit>");
    try {
      // simple example (extend later)
      if (text === "1km to m") return m.reply("1000m");
      if (text === "1kg to g") return m.reply("1000g");
      m.reply("⚡ Conversion not found in demo.");
    } catch {
      m.reply("❌ Conversion error.");
    }
  }
};
