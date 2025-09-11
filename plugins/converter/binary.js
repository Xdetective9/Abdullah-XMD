module.exports = {
  name: "binary",
  desc: "Convert text to binary",
  category: "converter",
  usage: "binary <text>",
  react: "⚙️",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: binary <text>");
    m.reply([...text].map(ch => ch.charCodeAt(0).toString(2)).join(" "));
  }
};

