// plugins/other/pair.js
module.exports = {
  name: "pair",
  desc: "Get pairing code for WhatsApp login",
  category: "other",
  usage: "pair",
  react: "🔑",
  start: async (m) => {
    m.reply("🔑 Pairing system is enabled in your index.js, just follow the on-screen instructions.");
  },
};
