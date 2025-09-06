/**
 * Plugin: math/sub
 * Purpose: Special plugin sub (math) — demo (implement API calls inside).
 * Generated: 2025-09-06T13:04:00.990Z
 *
 * Note: Replace the demo implementation with real logic if needed.
 */
module.exports = async (sock, m, args, ctx) => {
  const from = m.key ? (m.key.remoteJid || m.key.participant || '') : '';
  try {
      // Demo behaviour: basic echo / demo action
      const textArg = args && args.length ? args.join(' ') : null;
      if (!textArg) {
        return sock.sendMessage(from, { text: "Usage: /data/data/com.termux/files/usrsub <text>" });
      }
      await sock.sendMessage(from, { text: "🔹 math/sub response:\n" + textArg });
  } catch (e) {
    console.error("[plugin error] math/sub", e);
    try { await sock.sendMessage(from, { text: "❌ Error in math/sub: " + (e.message || e) }); } catch {}
  }
};
