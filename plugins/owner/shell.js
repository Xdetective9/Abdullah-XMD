const { exec } = require("child_process");
module.exports = {
  name: "shell",
  alias: ["sh"],
  desc: "Execute shell command on server (owner only!)",
  category: "owner",
  usage: "shell <cmd>",
  react: "💻",
  start: async (m, ctx = {}) => {
    const { args = [], isOwner = false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const cmd = args.join(" ");
    if (!cmd) return m.reply("⚠️ Usage: shell <command>");
    exec(cmd, { maxBuffer: 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) return m.reply("🚫 Shell error: " + err.message);
      const out = (stdout || stderr || "✓ Done").toString();
      m.reply("📤 Output:\n" + out.slice(0, 4000));
    });
  }
};
