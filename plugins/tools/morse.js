// plugins/tools/morse.js
module.exports = {
  name: "morse",
  desc: "Encode/Decode Morse code",
  category: "tools",
  usage: "morse encode|decode <text>",
  react: "📡",
  start: async (m, { text }) => {
    const [mode, ...rest] = text.split(" ");
    if (!mode || !rest.length) return m.reply("⚠️ Usage: morse encode|decode <text>");
    const input = rest.join(" ");
    const morseTable = { 
      "a":".-", "b":"-...", "c":"-.-.", "d":"-..", "e":".", "f":"..-.", "g":"--.", "h":"....", "i":"..", "j":".---", 
      "k":"-.-", "l":".-..", "m":"--", "n":"-.", "o":"---", "p":".--.", "q":"--.-", "r":".-.", "s":"...", "t":"-", 
      "u":"..-", "v":"...-", "w":".--", "x":"-..-", "y":"-.--", "z":"--..", " ":"/"
    };
    if (mode === "encode") {
      const encoded = input.toLowerCase().split("").map(c => morseTable[c] || c).join(" ");
      m.reply("📡 Morse Code: " + encoded);
    } else if (mode === "decode") {
      const reversed = Object.fromEntries(Object.entries(morseTable).map(([k, v]) => [v, k]));
      const decoded = input.split(" ").map(c => reversed[c] || c).join("");
      m.reply("📡 Decoded Text: " + decoded);
    } else {
      m.reply("❌ Use encode|decode.");
    }
  },
};
