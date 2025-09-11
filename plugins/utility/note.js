module.exports = {
  name: "note",
  alias: ["notes"],
  desc: "Save and view notes",
  category: "utility",
  usage: "note <add/view/delete> <text>",
  react: "📝",
  start: async (m, { text }) => {
    const [cmd, ...msg] = text.split(" ");
    const user = m.sender;
    notes[user] = notes[user] || [];

    if (cmd === "add") {
      notes[user].push(msg.join(" "));
      m.reply("✅ Note saved.");
    } else if (cmd === "view") {
      if (!notes[user].length) return m.reply("🗒️ No notes saved.");
      m.reply("📑 Your Notes:\n" + notes[user].map((n, i) => `${i + 1}. ${n}`).join("\n"));
    } else if (cmd === "delete") {
      const index = parseInt(msg[0]) - 1;
      if (notes[user][index]) {
        notes[user].splice(index, 1);
        m.reply("🗑️ Note deleted.");
      } else m.reply("❌ Invalid note index.");
    } else {
      m.reply("⚠️ Usage: note <add/view/delete> <text>");
    }
  }
};
