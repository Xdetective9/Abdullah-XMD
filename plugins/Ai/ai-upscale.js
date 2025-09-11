const axios = require("axios");

module.exports = {
  name: "ai-upscale",
  alias: ["upscale","enhance"],
  desc: "Upscale image (placeholder)",
  category: "ai",
  usage: "ai-upscale <image_url>",
  react: "🖼️",
  start: async (m, { text }) => {
    return m.reply("⚠️ Image upscale API not configured. Add Gigapixel/Replicate API here.");
  }
};
