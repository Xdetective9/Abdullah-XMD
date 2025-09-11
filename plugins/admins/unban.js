const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(process.cwd(), "data");
const BANNED_FILE = path.join(DATA_DIR, "banned.json");
function ensureData(){ if(!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR,{recursive:true}); if(!fs.existsSync(BANNED_FILE)) fs.writeFileSync(BANNED_FILE,JSON.stringify([]));}
module.exports = {
  name: "unban",
  alias: ["unblock"],
  desc: "Remove ban for a user (owner/admin only)",
  category: "admin",
  usage: "unban <number|@mention>",
  react: "🔓",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false, isAdmin = false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ Owner or group admin only.");
    const target = args[0];
    if (!target) return m.reply("⚠️ Usage: unban <number|@mention>");
    try {
      ensureData();
      const banned = JSON.parse(fs.readFileSync(BANNED_FILE, "utf8"));
      const id = target.replace(/\D/g, "");
      const idx = banned.indexOf(id);
      if (idx === -1) return m.reply("ℹ️ User not in banned list.");
      banned.splice(idx, 1);
      fs.writeFileSync(BANNED_FILE, JSON.stringify(banned, null, 2));
      return m.reply(`✅ Unbanned: *${id}*`);
    } catch (e) { return m.reply("🚫 Error (unban): " + e.message); }
  }
};
