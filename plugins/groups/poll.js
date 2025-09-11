module.exports = {
  name: "poll",
  alias: [],
  desc: "Create a group poll",
  category: "group",
  usage: "poll <question>|<opt1>|<opt2>|...",
  react: "📊",
  start: async (m, { text, sock }) => {
    const [q, ...opts] = text.split("|");
    if (!q || opts.length < 2) return m.reply("⚠️ Usage: poll Question|Option1|Option2");
    await sock.sendMessage(m.from, { poll: { name: q, values: opts } });
  }
};
