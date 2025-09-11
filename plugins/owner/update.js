const axios = require("axios");
const AdmZip = require("adm-zip");
const fs = require("fs");
const path = require("path");
module.exports = {
  name: "update",
  alias: [],
  desc: "Fetch commands/plugins from GitHub and overwrite local (owner only)",
  category: "owner",
  usage: "update",
  react: "⬇️",
  start: async (m, ctx = {}) => {
    const { isOwner = false } = ctx;
    if (!isOwner) return m.reply("❌ Owner only.");
    const repo = "Xdetective9/Abdullah-XMD"; // change if needed
    try {
      m.reply("⏳ Fetching latest commands from GitHub...");
      const url = `https://codeload.github.com/${repo}/zip/refs/heads/main`;
      const res = await axios({ url, responseType: "arraybuffer", timeout: 30000 });
      const zip = new AdmZip(res.data);
      const tmp = "./.tmp-update";
      if (fs.existsSync(tmp)) fs.rmSync(tmp, { recursive: true, force: true });
      zip.extractAllTo(tmp, true);
      const root = fs.readdirSync(tmp).find(n => fs.statSync(path.join(tmp, n)).isDirectory());
      const src = path.join(tmp, root, "plugins");
      if (fs.existsSync(src)) {
        const dest = path.join(process.cwd(), "plugins");
        fs.rmSync(dest, { recursive: true, force: true });
        fs.mkdirSync(dest, { recursive: true });
        // copy tree
        const copy = (s,d)=>{ for(const f of fs.readdirSync(s)){ const sf=path.join(s,f), df=path.join(d,f); if(fs.statSync(sf).isDirectory()){ fs.mkdirSync(df,{recursive:true}); copy(sf,df);} else fs.copyFileSync(sf,df);} };
        copy(src,dest);
        m.reply("✅ Updated plugins from GitHub. Restarting...");
        process.exit(0);
      } else {
        m.reply("⚠️ No plugins/ folder found in repo zip.");
      }
    } catch (e) {
      m.reply("🚫 Update failed: " + e.message);
    }
  }
};
