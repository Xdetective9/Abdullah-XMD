module.exports = {
  name: "dare",
  desc: "Get a dare challenge",
  category: "fun",
  usage: "dare",
  react: "😈",
  start: async (m) => {
    const dares = [
      "Send a random emoji in the group.",
      "Say 'I love you' to someone here.",
      "Change your name to 'I’m a potato' for 1 hour."
    ];
    m.reply(dares[Math.floor(Math.random() * dares.length)]);
  },
};
