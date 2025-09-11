const fs = require("fs");
module.exports = {
  name: "reload",
  alias: [],
  desc: "Reload plugins (owner only) — tells process to restart",
  category: "owner",
  usage: "reload",
  react: "♻️",
  start: async (m, ctx = {}) => {
    const { isOwner=false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    m.reply("♻️ Reloading (please wait)...");
    process.exit(0);
  }
};
