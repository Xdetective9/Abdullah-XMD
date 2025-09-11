const axios = require("axios");

module.exports = {
  name: "ai-handwriting",
  alias: ["handwriting","text2hand"],
  desc: "Convert text to handwriting (placeholder)",
  category: "ai",
  usage: "ai-handwriting <text>",
  react: "✍️",
  start: async (m, { text }) => {
    return m.reply("⚠️ Handwriting generation API not configured. Replace inside plugin.");
  }
};
