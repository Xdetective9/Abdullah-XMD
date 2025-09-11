// plugins/search/github.js
const axios = require("axios");
module.exports = {
  name: "github",
  desc: "Search GitHub users",
  category: "search",
  usage: "github <username>",
  react: "🐙",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: github <username>");
    try {
      const url = `https://api.github.com/users/${encodeURIComponent(text)}`;
      const res = await axios.get(url);
      const u = res.data;
      m.reply(`🐙 *${u.login}*\n👤 Name: ${u.name}\n📍 Location: ${u.location}\n📦 Public Repos: ${u.public_repos}\n👥 Followers: ${u.followers}\n🔗 ${u.html_url}`);
    } catch {
      m.reply("❌ User not found.");
    }
  },
};
