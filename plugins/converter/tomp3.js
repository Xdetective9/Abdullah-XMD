const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");

module.exports = {
  name: "tomp3",
  desc: "Convert video to MP3 audio",
  category: "converter",
  usage: "tomp3 (reply to video)",
  react: "🎵",
  start: async (m, { media, sendFile }) => {
    if (!media) return m.reply("⚠️ Reply to a video!");
    const file = `vid_${Date.now()}.mp4`;
    fs.writeFileSync(file, media);
    const out = `aud_${Date.now()}.mp3`;
    ffmpeg(file).save(out).on("end", () => {
      sendFile(m.from, out, "audio.mp3", m);
      fs.unlinkSync(file);
      fs.unlinkSync(out);
    });
  }
};
