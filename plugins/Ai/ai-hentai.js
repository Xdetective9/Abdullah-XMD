const axios = require("axios");

module.exports = {
  name: "ai-hentai",
  alias: ["hentai","anime18"],
  desc: "NSFW hentai image (use with care)",
  category: "ai",
  usage: "ai-hentai",
  react: "🔞",
  start: async (m, { sendFile }) => {
    try {
      const res = await axios.get("https://api.waifu.pics/nsfw/waifu");
      await sendFile(m.from, res.data.url, "hentai.jpg", m, { caption: "🔞 Hentai" });
    } catch (e) {
      m.reply("🚫 Hentai API error: " + (e.response?.data || e.message));
    }
  }
};
