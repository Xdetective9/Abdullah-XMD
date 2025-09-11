module.exports = {
  name: "base64",
  alias: [],
  desc: "Encode/Decode Base64",
  category: "utility",
  usage: "base64 <encode/decode> <text>",
  react: "🔐",
  start: async (m, { text }) => {
    const [cmd, ...msg] = text.split(" ");
    if (cmd === "encode") {
      m.reply("🔐 Encoded:\n" + Buffer.from(msg.join(" ")).toString("base64"));
    } else if (cmd === "decode") {
      m.reply("🔓 Decoded:\n" + Buffer.from(msg.join(" "), "base64").toString("utf-8"));
    } else {
      m.reply("⚠️ Usage: base64 <encode/decode> <text>");
    }
  }
};
