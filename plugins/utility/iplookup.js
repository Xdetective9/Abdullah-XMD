const axios = require("axios");

module.exports = {
  name: "iplookup",
  alias: ["ip"],
  desc: "Lookup IP address info",
  category: "utility",
  usage: "iplookup <ip>",
  react: "🌐",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: iplookup <ip>");
    try {
      const res = await axios.get(`http://ip-api.com/json/${text}`);
      m.reply("🌐 IP Info:\n" + JSON.stringify(res.data, null, 2));
    } catch {
      m.reply("❌ Failed to lookup IP.");
    }
  }
};
