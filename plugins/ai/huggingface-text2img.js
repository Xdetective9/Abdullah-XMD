const axios = require("axios");
const fs = require("fs");

module.exports = {
  name: "huggingface-text2img",
  alias: ["hf-img","hf-image"],
  desc: "Text->Image (HuggingFace inference)",
  category: "ai",
  usage: "huggingface-text2img <prompt>",
  react: "🎨",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: huggingface-text2img <prompt>");
    try {
      const HF = process.env.HUGGINGFACE_TOKEN || "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";
      const api = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2";
      const res = await axios.post(api, { inputs: text }, {
        headers: { Authorization: `Bearer ${HF}`, Accept: "application/octet-stream" },
        responseType: "arraybuffer",
        timeout: 120000
      });
      const tmp = `hf_img_${Date.now()}.png`;
      fs.writeFileSync(tmp, Buffer.from(res.data));
      await sendFile(m.from, tmp, tmp, m, { caption: `🖼️ ${text}` });
      fs.unlinkSync(tmp);
    } catch (e) {
      m.reply("🚫 HF image error: " + (e.response?.data || e.message));
    }
  }
};
