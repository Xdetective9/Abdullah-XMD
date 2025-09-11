const morse = { 
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----"
};

module.exports = {
  name: "morse",
  alias: [],
  desc: "Convert text to morse code",
  category: "utility",
  usage: "morse <text>",
  react: "📡",
  start: async (m, { text }) => {
    if (!text) return m.reply("⚠️ Usage: morse <text>");
    const result = text.toUpperCase().split("").map(ch => morse[ch] || ch).join(" ");
    m.reply("📡 Morse Code:\n" + result);
  }
};
