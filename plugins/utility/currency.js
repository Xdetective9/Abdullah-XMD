const axios = require("axios");

module.exports = {
  name: "currency",
  alias: ["convert"],
  desc: "Currency conversion",
  category: "utility",
  usage: "currency <amount> <from> <to>",
  react: "💱",
  start: async (m, { text }) => {
    const [amount, from, to] = text.split(" ");
    if (!amount || !from || !to) return m.reply("⚠️ Usage: currency <amount> <from> <to>");
    try {
      const res = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
      m.reply(`💱 ${amount} ${from.toUpperCase()} = ${res.data.result} ${to.toUpperCase()}`);
    } catch {
      m.reply("❌ Conversion failed.");
    }
  }
};

