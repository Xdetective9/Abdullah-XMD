const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

module.exports = {
  name: "removebg",
  alias: ["bgremove","rm-bg"],
  desc: "Remove background from image (remove.bg)",
  category: "ai",
  usage: "removebg <image_url>",
  react: "🧹",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: removebg <image_url>");
    try {
      const KEY = process.env.REMOVEBG_KEY || "dyxpGE9LihAordpJoRi5s4wb";
      const form = new FormData();
      form.append("image_url", text);
      form.append("size", "auto");
      const res = await axios.post("https://api.remove.bg/v1.0/removebg", form, {
        headers: { ...form.getHeaders(), "X-Api-Key": KEY },
        responseType: "arraybuffer"
      });
      const tmp = `no_bg_${Date.now()}.png`;
      fs.writeFileSync(tmp, Buffer.from(res.data));
      await sendFile(m.from, tmp, tmp, m, { caption: "✨ Background removed" });
      fs.unlinkSync(tmp);
    } catch (e) {
      m.reply("🚫 remove.bg error: " + (e.response?.data || e.message));
    }
  }
};
