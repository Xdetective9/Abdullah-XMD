// plugins/owner/botname.js
module.exports = {
  name: "botname",
  desc: "Change bot display name (owner only)",
  category: "owner",
  usage: "botname <new name>",
  react: "✏️",
  start: async (m, { args, isOwner, config, saveConfig }) => {
    try {
      if (!isOwner) return m.reply("🚫 Owner only.");
      const name = args.join(" ");
      if (!name) return m.reply("⚠️ Usage: .botname <new name>");
      config.botName = name;
      if (typeof saveConfig === "function") saveConfig(config); // loader may give saveConfig
      m.reply("✅ Bot name updated to: " + name);
    } catch (e) {
      m.reply("🚫 Error in botname: " + (e.message || e));
    }
  },
};
