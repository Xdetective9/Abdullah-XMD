const archiver = require("archiver");
const fs = require("fs");

module.exports = {
  name: "zip",
  desc: "Compress files into zip",
  category: "converter",
  usage: "zip (reply to multiple files)",
  react: "📦",
  start: async (m, { quoted, sendFile }) => {
    if (!quoted) return m.reply("⚠️ Reply with multiple files!");
    const out = `files_${Date.now()}.zip`;
    const output = fs.createWriteStream(out);
    const archive = archiver("zip");
    archive.pipe(output);
    for (let f of quoted) archive.append(f, { name: `file_${Date.now()}.bin` });
    await archive.finalize();
    sendFile(m.from, out, "files.zip", m);
  }
};
