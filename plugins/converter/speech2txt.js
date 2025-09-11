const speech = require("@google-cloud/speech");
const fs = require("fs");

module.exports = {
  name: "speech2txt",
  desc: "Convert speech audio to text",
  category: "converter",
  usage: "speech2txt (reply to audio)",
  react: "🎙️",
  start: async (m, { media }) => {
    if (!media) return m.reply("⚠️ Reply to audio file!");
    const client = new speech.SpeechClient();
    const audio = { content: media.toString("base64") };
    const config = { encoding: "LINEAR16", languageCode: "en-US" };
    const [res] = await client.recognize({ audio, config });
    m.reply("📝 " + res.results.map(r => r.alternatives[0].transcript).join("\n"));
  }
};
