module.exports = {
  name: "passwordgen",
  alias: ["passgen"],
  desc: "Generate random password",
  category: "utility",
  usage: "passgen <length>",
  react: "🔑",
  start: async (m, { text }) => {
    const len = parseInt(text) || 12;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < len; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    m.reply("🔑 Generated Password:\n" + pass);
  }
};