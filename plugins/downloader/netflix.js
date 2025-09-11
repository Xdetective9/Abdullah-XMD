const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "netflix",
  alias: ["nfx"],
  desc: "Download movies/dramas from Netflix (experimental)",
  category: "downloader",
  usage: "netflix <url>",
  react: "🍿",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: netflix <url>");
    m.reply("⚠️ Netflix downloader is experimental. Requires external API.");
  },
};
