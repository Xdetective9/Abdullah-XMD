const fs = require("fs");
const path = require("path");
const SETTINGS_FILE = path.join(process.cwd(), "settings.json");
function load(){ return fs.existsSync(SETTINGS_FILE) ? JSON.parse(fs.readFileSync(SETTINGS_FILE,"utf8")) : {}; }
function save(s){ fs.writeFileSync(SETTINGS_FILE, JSON.stringify(s, null, 2)); }

module.exports = {
  name: "setmenu",
  alias: [],
  desc: "Set menu style (1-5) (owner only)",
  category: "owner",
  usage: "setmenu <1..5>",
  react: "🎨",
  start: async (m, ctx={}) => {
    const { args = [], isOwner=false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const n = parseInt(args[0],10);
    if (!n || n < 1 || n > 5) return m.reply("⚠️ Usage: .setmenu 1..5");
    const s = load();
    s.menuStyle = n;
    save(s);
    return m.reply(`✅ Menu style set to *${n}*`);
  }
};
