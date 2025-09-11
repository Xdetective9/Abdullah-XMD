const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "iqiyi",
  alias: ["iqi"],
  desc: "Download from iQIYI (Donghua/Drama)",
  category: "downloader",
  usage: "iqiyi <url>",
  react: "🟢",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: iqiyi <url>");
    m.reply("⚠️ iQIYI downloader needs API key. Free support limited.");
  },
};