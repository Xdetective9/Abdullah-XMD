// plugins/search/npm.js
const axios = require("axios");
module.exports = {
  name: "npm",
  desc: "Search npm packages",
  category: "search",
  usage: "npm <package>",
  react: "📦",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: npm <package>");
    try {
      const url = `https://registry.npmjs.org/${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const latest = res.data["dist-tags"].latest;
      const pkg = res.data.versions[latest];
      m.reply(`📦 *${pkg.name}* v${pkg.version}\n📅 Published: ${pkg.date || "N/A"}\n📜 ${pkg.description || "No description"}\n🔗 https://www.npmjs.com/package/${pkg.name}`);
    } catch {
      m.reply("❌ Package not found.");
    }
  },
};
