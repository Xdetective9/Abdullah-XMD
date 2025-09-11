module.exports = {
  name: "truth",
  desc: "Get a truth question",
  category: "fun",
  usage: "truth",
  react: "😳",
  start: async (m) => {
    const truths = [
      "What’s your deepest secret?",
      "Have you ever lied to your parents?",
      "What’s the most embarrassing thing you’ve done?"
    ];
    m.reply(truths[Math.floor(Math.random() * truths.length)]);
  },
};
