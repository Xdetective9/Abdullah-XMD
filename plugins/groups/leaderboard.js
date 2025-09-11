module.exports = {
  name: "leaderboard",
  alias: ["top"],
  desc: "Show XP leaderboard",
  category: "group",
  usage: "leaderboard",
  react: "🏆",
  start: async (m) => {
    let board = Object.entries(global.levels || {}).map(([u, d]) => ({ user: u, level: d.level, xp: d.xp }));
    board.sort((a, b) => b.xp - a.xp);
    let msg = "🏆 *XP Leaderboard* 🏆\n\n";
    board.slice(0, 10).forEach((d, i) => {
      msg += `${i + 1}. @${d.user.split("@")[0]} — Lvl ${d.level} (${d.xp} XP)\n`;
    });
    m.reply(msg, { mentions: board.map(b => b.user) });
  }
};
