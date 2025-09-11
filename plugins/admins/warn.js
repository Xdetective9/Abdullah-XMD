const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(process.cwd(),"data");
const WARN_FILE = path.join(DATA_DIR,"warns.json");
function ensure(){ if(!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR,{recursive:true}); if(!fs.existsSync(WARN_FILE)) fs.writeFileSync(WARN_FILE, JSON.stringify({})); }
module.exports = {
  name: "warn",
  alias: [],
  desc: "Warn a user (increases their warn count)",
  category: "admin",
  usage: "warn <number|@mention> [reason]",
  react: "⚠️",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false, isAdmin = false } = ctx;
    if (!isOwner && !isAdmin) return m.reply("❌ Owner or group admin only.");
    const target = args[0];
    if (!target) return m.reply("⚠️ Usage: warn <number|@mention> [reason]");
    try {
      ensure();
      const data = JSON.parse(fs.readFileSync(WARN_FILE,"utf8"));
      const id = target.replace(/\D/g,"");
      const reason = args.slice(1).join(" ") || "No reason";
      data[id] = data[id] ? { count: data[id].count + 1, reasons: (data[id].reasons||[]).concat(reason) } : { count: 1, reasons: [reason] };
      fs.writeFileSync(WARN_FILE, JSON.stringify(data, null, 2));
      return m.reply(`⚠️ Warned *${id}*\n• Total warns: *${data[id].count}*\n• Reason: ${reason}`);
    } catch (e) { return m.reply("🚫 Error (warn): "+e.message); }
  }
};
