module.exports = {
  name: "groupinfo",
  desc: "Get group info",
  category: "group",
  usage: "groupinfo",
  react: "ℹ️",
  start: async (m, { groupMetadata }) => {
    let info = `ℹ️ *Group Info* ℹ️\n\n🏷️ Name: ${groupMetadata.subject}\n👤 Owner: ${groupMetadata.owner}\n👥 Members: ${groupMetadata.participants.length}`;
    m.reply(info);
  }
};
