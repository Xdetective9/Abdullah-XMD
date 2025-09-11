const axios = require("axios");

module.exports = {
  name: "waifu",
  alias: ["animegirl"],
  desc: "Get random waifu image",
  category: "ai",
  usage: "waifu",
  react: "💖",
  start: async (m, { sendFile }) => {
    try {
      const res = await axios.get("https://api.waifu.pics/sfw/waifu");
      await sendFile(m.from, res.data.url, "waifu.jpg", m, { caption: "Here’s your waifu 💖" });
    } catch (e) {
      m.reply("🚫 Error: " + e.message);
    }
  }
};
