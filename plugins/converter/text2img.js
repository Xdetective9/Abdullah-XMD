const { createCanvas } = require("canvas");
const fs = require("fs");

module.exports = {
  name: "text2img",
  desc: "Convert text to image",
  category: "converter",
  usage: "text2img <text>",
  react: "📝",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: text2img <text>");
    const canvas = createCanvas(600, 400);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 600, 400);
    ctx.fillStyle = "#fff";
    ctx.font = "28px Arial";
    ctx.fillText(text, 50, 200);
    const path = `txt_${Date.now()}.png`;
    fs.writeFileSync(path, canvas.toBuffer());
    sendFile(m.from, path, "text.png", m);
  }
};
