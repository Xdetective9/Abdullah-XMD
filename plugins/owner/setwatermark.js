const fs = require("fs");
const path = require("path");
const SETTINGS_FILE = path.join(process.cwd(), "settings.json");
function load(){ return fs.existsSync(SETTINGS_FILE) ? JSON.parse(fs.readFileSync(SETTINGS_FILE,"utf8")) : {}; }
function save(s){ fs.writeFileSync(SETTINGS_FILE, JSON.stringify(s, null, 2)); }

module.exports = {
  name: "setwatermark",
  alias: ["watermark","setwm"],
  desc: "Set download caption watermark (owner only)",
  category: "owner",
  usage: "setwatermark <text>",
  react: "💧",
  start: async (m, ctx={}) => {
    const { args = [], isOwner=false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const text = args.join(" ");
    if (!text) return m.reply("⚠️ Usage: setwatermark <text>");
    const s = load();
    s.watermark = text;
    save(s);
    return m.reply("✅ Watermark set.");
  }
};
