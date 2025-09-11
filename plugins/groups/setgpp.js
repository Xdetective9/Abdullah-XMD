module.exports = {
  name: "setgpp",
  alias: ["setgpic"],
  desc: "Set group profile picture",
  category: "group",
  usage: "setgpp <reply with image>",
  react: "🖼️",
  start: async (m, { sock }) => {
    if (!m.isGroup) return m.reply("❌ Group only.");
    if (!m.quoted || !m.quoted.imageMessage) return m.reply("⚠️ Reply to an image.");
    const buffer = await m.quoted.download();
    await sock.updateProfilePicture(m.from, buffer);
    m.reply("✅ Group profile pic updated.");
  }
};
