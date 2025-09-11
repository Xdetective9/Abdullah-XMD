const axios = require("axios");
module.exports = {
  name: "dogfact",
  desc: "Get a dog fact",
  category: "fun",
  usage: "dogfact",
  react: "🐶",
  start: async (m) => {
    try {
      const res = await axios.get("https://dogapi.dog/api/v2/facts");
      m.reply(res.data.data[0].attributes.body);
    } catch {
      m.reply("❌ Couldn't fetch dog fact.");
    }
  },
};
