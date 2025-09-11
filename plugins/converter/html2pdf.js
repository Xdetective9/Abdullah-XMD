const puppeteer = require("puppeteer");

module.exports = {
  name: "html2pdf",
  desc: "Convert webpage/HTML to PDF",
  category: "converter",
  usage: "html2pdf <url>",
  react: "🌐",
  start: async (m, { text, sendFile }) => {
    if (!text) return m.reply("⚠️ Usage: html2pdf <url>");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(text, { waitUntil: "networkidle2" });
    const pdf = await page.pdf();
    await browser.close();
    sendFile(m.from, pdf, "web.pdf", m);
  }
};
