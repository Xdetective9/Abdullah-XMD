const dares = ["⚡ Send your gallery’s 5th pic!", "🔥 Text ‘I love you’ to a random contact", "🎤 Sing a song here"];
module.exports = {
  name: "dare",
  alias: [],
  desc: "Dare game",
  category: "group",
  usage: "dare",
  react: "🎯",
  start: async (m) => {
    let d = dares[Math.floor(Math.random() * dares.length)];
    m.reply(`🎯 *Dare Challenge!* 🎯\n\n${d}`);
  }
};
