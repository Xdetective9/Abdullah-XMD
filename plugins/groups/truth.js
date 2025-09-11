const truths = ["🔥 What’s your biggest fear?", "😏 Have you ever lied to your best friend?", "✨ Crush name?"];
module.exports = {
  name: "truth",
  alias: [],
  desc: "Truth game",
  category: "group",
  usage: "truth",
  react: "❓",
  start: async (m) => {
    let t = truths[Math.floor(Math.random() * truths.length)];
    m.reply(`❓ *Truth Time!* ❓\n\n${t}`);
  }
};
