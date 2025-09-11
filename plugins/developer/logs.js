// plugins/developer/logs.js
const fs = require("fs");
module.exports = {
  name: "logs",
  desc: "Read recent bot logs",
  category: "developer",
  usage: "logs",
  react: "📜",
  start: async (m, { isOwner }) => {
    if (!isOwner) return m.reply("🚫 Owner only.");
    try {
      const data = fs.readFileSync("logs.txt", "utf8");
      m.reply("📜 Logs:\n" + data.slice(-3000));
    } catch {
      m.reply("⚠️ No logs found.");
    }
  },
};
