const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(process.cwd(),"data");
const WARN_FILE = path.join(DATA_DIR,"warns.json");
module.exports = {
  name: "resetwarn",
  alias: ["clearwarn","delwarn"],
  desc: "Reset warn for a user or all warns (owner/admin)",
  category: "admin",
  usage: "resetwarn <number|@mention>|all",
  react: "🧹",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false, isAdmin = false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ Owner or group admin only.");
    if (!fs.existsSync(WARN_FILE)) return m.reply("ℹ️ No warns to reset.");
    try {
      const data = JSON.parse(fs.readFileSync(WARN_FILE,"utf8"));
      if (args[0] === "all") {
        fs.writeFileSync(WARN_FILE, JSON.stringify({}));
        return m.reply("✅ All warns cleared.");
      }
      const id = (args[0] || "").replace(/\D/g,"");
      if (!id) return m.reply("⚠️ Usage: resetwarn <number|@mention>|all");
      delete data[id];
      fs.writeFileSync(WARN_FILE, JSON.stringify(data, null, 2));
      return m.reply(`✅ Warns for *${id}* reset.`);
    } catch (e) { return m.reply("🚫 Error (resetwarn): " + e.message); }
  }
};
