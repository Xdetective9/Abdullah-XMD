const axios = require("axios");
const { getWatermark } = require("../../lib/utils");

module.exports = {
  name: "twitter",
  alias: ["tw", "twdl"],
  desc: "Search Twitter/X posts",
  category: "downloader",
  usage: "twitter <keyword>",
  react: "🐦",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: twitter <keyword>");

    try {
      const url = `https://twitter-x-api.p.rapidapi.com/api/community/search/posts?keyword=${encodeURIComponent(text)}&search_type=top`;
      const res = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "twitter-x-api.p.rapidapi.com",
          "x-rapidapi-key": "dd8702f5famshafac77b8852c11fp172040jsnca0f75c33826"
        },
      });

      const post = res.data?.data?.[0];
      if (!post) return m.reply("❌ No results found.");

      const wm = getWatermark();
      await m.reply(`🐦 Twitter Top Post:\n\n${post.text}\n\n${wm || ""}`);
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
