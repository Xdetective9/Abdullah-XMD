const fs = require("fs");
const path = require("path");
const SETTINGS_FILE = path.join(process.cwd(), "settings.json");
function load(){ return fs.existsSync(SETTINGS_FILE) ? JSON.parse(fs.readFileSync(SETTINGS_FILE,"utf8")) : {}; }
function save(s){ fs.writeFileSync(SETTINGS_FILE, JSON.stringify(s, null, 2)); }

module.exports = {
  name: "setownernumber",
  alias: ["setownernum","setownerid"],
  desc: "Set owner phone number (owner only)",
  category: "owner",
  usage: "setownernumber <number>",
  react: "📞",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const num = args[0];
    if (!num) return m.reply("⚠️ Usage: setownernumber <number>");
    const s = load();
    s.owners = [num];
    save(s);
    return m.reply(`✅ Owner number set to *${num}*`);
  }
};
