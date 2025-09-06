/**
 * Plugin: tools/tinyurl
 * Purpose: Special plugin tinyurl (tools) — demo (implement API calls inside).
 * Generated: 2025-09-06T13:04:00.945Z
 *
 * Note: Replace the demo implementation with real logic if needed.
 */
module.exports = async (sock, m, args, ctx) => {
  const from = m.key ? (m.key.remoteJid || m.key.participant || '') : '';
  try {
      // Demo behaviour: basic echo / demo action
      const textArg = args && args.length ? args.join(' ') : null;
      if (!textArg) {
        return sock.sendMessage(from, { text: "Usage: /data/data/com.termux/files/usrtinyurl <text>" });
      }
      await sock.sendMessage(from, { text: "🔹 tools/tinyurl response:\n" + textArg });
  } catch (e) {
    console.error("[plugin error] tools/tinyurl", e);
    try { await sock.sendMessage(from, { text: "❌ Error in tools/tinyurl: " + (e.message || e) }); } catch {}
  }
};
