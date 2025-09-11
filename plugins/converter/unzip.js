const unzipper = require("unzipper");
const fs = require("fs");

module.exports = {
  name: "unzip",
  desc: "Extract zip archive",
  category: "converter",
  usage: "unzip (reply to zip)",
  react: "📂",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a zip file!");
    const dir = `unz_${Date.now()}`;
    fs.mkdirSync(dir);
    const stream = fs.createReadStream(media).pipe(unzipper.Extract({ path: dir }));
    stream.on("close", () => m.reply(`✅ Extracted to ${dir}`));
  }
};
