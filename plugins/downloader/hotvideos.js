module.exports = {
  name: "hotvideos",
  alias: ["sexyvideos"],
  desc: "NSFW hot videos fetcher",
  category: "nsfw",
  usage: "hotvideos",
  react: "🎬",
  start: async (m) => {
    m.reply("⚠️ NSFW video API not connected. (Add Redtube/Xvideos API manually)");
  },
};
