const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(process.cwd(),"data");
const WARN_FILE = path.join(DATA_DIR,"warns.json");
module.exports = {
  name: "listwarn",
  alias: ["warns","warnings"],
  desc: "List warn counts",
  category: "admin",
  usage: "listwarn",
  react: "📝",
  start: async (m, ctx = {}) => {
    try {
      if (!fs.existsSync(WARN_FILE)) return m.reply("ℹ️ No warns recorded.");
      const data = JSON.parse(fs.readFileSync(WARN_FILE,"utf8"));
      const keys = Object.keys(data);
      if (!keys.length) return m.reply("ℹ️ No warns recorded.");
      const lines = ["📝 *Warn List*", ""];
      for (const k of keys) lines.push(`• ${k} — ${data[k].count}`);
      return m.reply(lines.join("\n"));
    } catch (e) { return m.reply("🚫 Error (listwarn): " + e.message); }
  }
};
