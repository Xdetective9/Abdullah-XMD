const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(process.cwd(), "data");
const BANNED_FILE = path.join(DATA_DIR, "banned.json");
module.exports = {
  name: "listbanned",
  alias: ["banned","list-ban"],
  desc: "Show list of banned users",
  category: "admin",
  usage: "listbanned",
  react: "📋",
  start: async (m, ctx = {}) => {
    try {
      if (!fs.existsSync(BANNED_FILE)) return m.reply("ℹ️ No banned users yet.");
      const arr = JSON.parse(fs.readFileSync(BANNED_FILE,"utf8"));
      if (!arr.length) return m.reply("ℹ️ Banned list is empty.");
      const text = ["🔒 *BANNED USERS:*",""].concat(arr.map((x,i)=>`${i+1}. ${x}`)).join("\n");
      return m.reply(text);
    } catch (e) { return m.reply("🚫 Error (listbanned): "+e.message); }
  }
};
