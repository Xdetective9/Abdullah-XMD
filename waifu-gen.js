const axios = require("axios");

module.exports = {
  name: "waifu-gen",
  alias: ["waifu","animegirl"],
  desc: "Generate a random waifu image (waifu.pics)",
  category: "ai",
  usage: "waifu-gen",
  react: "💠",
  start: async (m, { sendFile }) => {
    try {
      const res = await axios.get("https://api.waifu.pics/sfw/waifu", { timeout: 15000 });
      const url = res.data?.url;
      if (!url) return m.reply("❌ No image returned.");
      await sendFile(m.from, url, "waifu.jpg", m, { caption: "💠 Waifu generated" });
    } catch (e) {
      m.reply("🚫 Waifu API error: " + (e.response?.data || e.message));
    }
  }
};
