module.exports = {
  name: "truthdare",
  desc: "Play Truth or Dare",
  category: "fun",
  usage: "truthdare <truth/dare>",
  react: "🎲",
  start: async (m, { text }) => {
    const truths = [
      "What’s your most embarrassing secret?",
      "Who was your first crush?",
      "Have you ever lied to your best friend?"
    ];
    const dares = [
      "Send a voice note singing your favorite song.",
      "Text your crush 'I like you ❤️'.",
      "Do 20 pushups right now!"
    ];
    if (/truth/i.test(text)) return m.reply(truths[Math.floor(Math.random() * truths.length)]);
    if (/dare/i.test(text)) return m.reply(dares[Math.floor(Math.random() * dares.length)]);
    return m.reply("⚠️ Usage: truthdare <truth/dare>");
  },
};
