const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");

module.exports = {
  name: "gif2mp4",
  desc: "Convert GIF to MP4",
  category: "converter",
  usage: "gif2mp4 (reply to GIF)",
  react: "🎥",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a GIF!");
    const input = `gif_${Date.now()}.gif`;
    const out = `vid_${Date.now()}.mp4`;
    fs.writeFileSync(input, media);
    ffmpeg(input).outputOptions("-movflags faststart").save(out).on("end", () => {
      sendFile(m.from, out, "video.mp4", m);
      fs.unlinkSync(input); fs.unlinkSync(out);
    });
  }
};
