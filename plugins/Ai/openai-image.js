const axios = require("axios");
const fs = require("fs");

module.exports = {
  name: "openai-image",
  alias: ["dalle","imagegen"],
  desc: "Generate image with OpenAI (DALL·E style)",
  category: "ai",
  usage: "openai-image <prompt>",
  react: "🖼️",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: openai-image <prompt>");
    try {
      const OPENAI_KEY = process.env.OPENAI_API_KEY || "sk-svcacct-cWfbYpSP...";
      const res = await axios.post("https://api.openai.com/v1/images/generations", {
        model: "gpt-image-1",
        prompt: text,
        size: "1024x1024",
        n: 1
      }, { headers: { Authorization: `Bearer ${OPENAI_KEY}` } , responseType: 'json'});
      const b64 = res.data?.data?.[0]?.b64_json;
      if (!b64) return m.reply("❌ Couldn't generate image.");
      const buf = Buffer.from(b64, "base64");
      const tmp = `openai_image_${Date.now()}.png`;
      fs.writeFileSync(tmp, buf);
      await sendFile(m.from, tmp, tmp, m, { caption: `🖼️ ${text}` });
      fs.unlinkSync(tmp);
    } catch (e) {
      m.reply("🚫 Image generation error: " + (e.response?.data || e.message));
    }
  }
};
