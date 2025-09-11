const fs = require("fs");
const path = require("path");
const SETTINGS_FILE = path.join(process.cwd(), "settings.json");
function load(){ return fs.existsSync(SETTINGS_FILE) ? JSON.parse(fs.readFileSync(SETTINGS_FILE,"utf8")) : {}; }
function save(s){ fs.writeFileSync(SETTINGS_FILE, JSON.stringify(s, null, 2)); }

module.exports = {
  name: "setownername",
  alias: ["setowner"],
  desc: "Set owner display name (owner only)",
  category: "owner",
  usage: "setownername <name>",
  react: "👤",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const name = args.join(" ");
    if (!name) return m.reply("⚠️ Usage: setownername <name>");
    const s = load();
    s.ownerName = name;
    save(s);
    return m.reply(`✅ Owner name set to *${name}*`);
  }
};
