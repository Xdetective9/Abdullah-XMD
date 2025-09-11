const axios = require("axios");

module.exports = {
  name: "npm",
  alias: [],
  desc: "Search npm package info",
  category: "utility",
  usage: "npm <package>",
  react: "📦",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: npm <package>");
    try {
      const res = await axios.get(`https://registry.npmjs.org/${text}`);
      m.reply(`📦 ${res.data.name}\n📝 Description: ${res.data.description}\n🔗 Version: ${res.data["dist-tags"].latest}`);
    } catch {
      m.reply("❌ Package not found.");
    }
  }
};

