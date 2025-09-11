const axios = require("axios");

module.exports = {
  name: "github",
  alias: ["gh"],
  desc: "Get GitHub user info",
  category: "utility",
  usage: "github <username>",
  react: "🐙",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: github <username>");
    try {
      const res = await axios.get(`https://api.github.com/users/${text}`);
      m.reply(`🐙 GitHub Profile:
👤 Name: ${res.data.name}
🔗 URL: ${res.data.html_url}
👥 Followers: ${res.data.followers}
📦 Repos: ${res.data.public_repos}`);
    } catch {
      m.reply("❌ GitHub user not found.");
    }
  }
};
