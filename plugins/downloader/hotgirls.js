const axios = require("axios");

module.exports = {
  name: "hotgirls",
  alias: ["sexygirls", "models"],
  desc: "Random hot/sexy girl images",
  category: "nsfw",
  usage: "hotgirls",
  react: "🔥",
  start: async (m, { sendFile }) => {
    try {
      const res = await axios.get("https://api.waifu.pics/nsfw/waifu"); // anime style hot girl
      const img = res.data?.url;
      if (!img) return m.reply("❌ No result.");
      await sendFile(m.from, img, "hotgirl.jpg", m, { caption: "🔥 Sexy girl" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  },
};
