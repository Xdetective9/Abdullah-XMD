module.exports = {
  name: "myvinfo",
  alias: ["botinfo", "xmdinfo"],
  desc: "Show Abdullah-XMD bot and owner info",
  category: "group",
  usage: "myvinfo",
  react: "ℹ️",
  start: async (m) => {
    m.reply(`🤖 *Bot Information*
━━━━━━━━━━━━━━
👑 Bot Name: Abdullah-XMD
🧑‍💻 Owner: Abdullah Rana
📱 Owner Number: wa.me/923288055104
🌐 GitHub: https://github.com/Xdetective9/Abdullah-XMD.git
⚡ Category: Group Management + AI + Media + Utility
`);
  }
};
