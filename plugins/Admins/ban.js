const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data");
const BANNED_FILE = path.join(DATA_DIR, "banned.json");

function ensureData() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(BANNED_FILE)) fs.writeFileSync(BANNED_FILE, JSON.stringify([]));
}
function loadBanned() {
  ensureData();
  return JSON.parse(fs.readFileSync(BANNED_FILE, "utf8"));
}
function saveBanned(arr) {
  fs.writeFileSync(BANNED_FILE, JSON.stringify(arr, null, 2));
}

module.exports = {
  name: "ban",
  alias: ["block"],
  desc: "Ban a user from using the bot (owner/admin only)",
  category: "admin",
  usage: "ban <number|@mention>",
  react: "🔒",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false, isAdmin = false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ *Owner or group admin only.*");
    const target = args[0];
    if (!target) return m.reply("⚠️ Usage: ban <number|@mention>");

    try {
      const banned = loadBanned();
      const id = target.replace(/\D/g, "");
      if (banned.includes(id)) return m.reply("ℹ️ User is already banned.");
      banned.push(id);
      saveBanned(banned);
      return m.reply(`✅ Banned user: *${id}*`);
    } catch (e) {
      return m.reply("🚫 Error (ban): " + e.message);
    }
  },
};
