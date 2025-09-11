module.exports = {
  name: "debinary",
  desc: "Convert binary to text",
  category: "converter",
  usage: "debinary <binary string>",
  react: "🧩",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: debinary <binary>");
    const str = text.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
    m.reply(str);
  }
};
