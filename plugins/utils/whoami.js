/**
 * Plugin: utils/whoami
 * Purpose: Special plugin whoami (utils) — demo (implement API calls inside).
 * Generated: 2025-09-06T13:04:00.898Z
 *
 * Note: Replace the demo implementation with real logic if needed.
 */
module.exports = async (sock, m, args, ctx) => {
  const from = m.key ? (m.key.remoteJid || m.key.participant || '') : '';
  try {
      // Demo behaviour: basic echo / demo action
      const textArg = args && args.length ? args.join(' ') : null;
      if (!textArg) {
        return sock.sendMessage(from, { text: "Usage: /data/data/com.termux/files/usrwhoami <text>" });
      }
      await sock.sendMessage(from, { text: "🔹 utils/whoami response:\n" + textArg });
  } catch (e) {
    console.error("[plugin error] utils/whoami", e);
    try { await sock.sendMessage(from, { text: "❌ Error in utils/whoami: " + (e.message || e) }); } catch {}
  }
};
