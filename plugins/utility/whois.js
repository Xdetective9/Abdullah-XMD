const axios = require("axios");

module.exports = {
  name: "whois",
  alias: ["domain"],
  desc: "Check domain WHOIS info",
  category: "utility",
  usage: "whois <domain>",
  react: "🌐",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: whois <domain>");
    try {
      const res = await axios.get(`https://api.api-ninjas.com/v1/whois?domain=${text}`, {
        headers: { "X-Api-Key": process.env.NINJA_API_KEY }
      });
      m.reply("🌐 WHOIS Info:\n" + JSON.stringify(res.data, null, 2));
    } catch {
      m.reply("❌ Failed to fetch WHOIS info.");
    }
  }
};

