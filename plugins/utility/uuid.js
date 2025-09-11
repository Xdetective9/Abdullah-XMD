const { v4: uuidv4 } = require("uuid");

module.exports = {
  name: "uuid",
  alias: [],
  desc: "Generate UUID",
  category: "utility",
  usage: "uuid",
  react: "🆔",
  start: async (m) => {
    m.reply("🆔 UUID: " + uuidv4());
  }
};
