module.exports = {
  name: "grouprules",
  alias: ["rules"],
  desc: "Show group rules",
  category: "group",
  usage: "grouprules",
  react: "📜",
  start: async (m) => {
    m.reply(
      `📜 *Group Rules* ⚡\n━━━━━━━━━━━━━━\n` +
      `1️⃣ Respect everyone 🙏\n` +
      `2️⃣ No spam 🚫\n` +
      `3️⃣ No links (if Anti-Link is on) 🔗\n` +
      `4️⃣ Stay legendary ✨🔥`
    );
  }
};
