#!/usr/bin/env node
/**
 * generate-plugins-760.js
 *
 * Generates ~760 runnable "plugin" files under ./plugins/<category>/*.js
 * - Each plugin exports an async function (module.exports = async (sock, m, args, ctx) => {...})
 * - Plugins that need APIs read process.env and if missing return a clear message.
 * - Creates README_plugins.txt and settings.json
 * - Optionally creates a zip using the "zip" CLI if available.
 *
 * Usage:
 *   node generate-plugins-760.js
 *
 * NOTE: This script intentionally does NOT embed any API keys. Use .env and index.js
 * to store actual keys. Keys in plugins are read like: process.env.OPENAI_API_KEY || "_api_paste_here_"
 */

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const OUT = path.join(process.cwd(), 'plugins');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

// config: categories and counts (adjust counts to reach ~760)
const categories = [
  { name: 'ai', count: 50 },          // GPT / image helpers (most require API)
  { name: 'downloader', count: 60 },  // youtube/tiktok/twitter/etc (API or scraping)
  { name: 'audio', count: 60 },       // audio effects / conversions
  { name: 'image', count: 60 },       // image tools
  { name: 'fun', count: 50 },         // jokes, facts, games
  { name: 'games', count: 50 },       // small games
  { name: 'group', count: 50 },       // group admin helpers
  { name: 'utils', count: 80 },       // utility tools: uptime, whoami, calc, convert
  { name: 'search', count: 50 },      // imdb, yts, weather (API)
  { name: 'tools', count: 60 },       // qrcode, tinyurl, translate, etc
  { name: 'media', count: 50 },       // sticker, tomp3, tomp4, thumbnail
  { name: 'owner', count: 30 },       // owner-only admin utilities
  { name: 'nsfw', count: 25 },        // owner-only nsfw plugins (hidden by default)
  { name: 'programming', count: 20 }, // dev helpers
  { name: 'math', count: 10 }         // math operations
];

// helper: generate a safe exported plugin file content
function pluginTemplate({ category, name, purpose, apiEnvVar }) {
  // simple sanitized display name
  const display = `${category}/${name}`;
  // If API needed, show environment variable name and help message
  const apiCheck = apiEnvVar
    ? `const API_KEY = process.env.${apiEnvVar} || "_api_paste_here_";
  if (!API_KEY || API_KEY === "_api_paste_here_") {
    return sock.sendMessage(from, { text: "⚠️ Plugin *${display}* requires API key: ${apiEnvVar}.\\nAdd it to your .env (or leave placeholder and update later)." });
  }`
    : '';

  // default plugin behavior: many plugins will echo or do a small action
  const body = apiEnvVar
    ? `  ${apiCheck}
  // Demo behaviour: tell user API is set (actual implementation should call the API)
  await sock.sendMessage(from, { text: "✅ ${display} executed. (API key present - implement actual API call here)" });`
    : `  // Demo behaviour: basic echo / demo action
  const textArg = args && args.length ? args.join(' ') : null;
  if (!textArg) {
    return sock.sendMessage(from, { text: "Usage: ${process.env.PREFIX || '.'}${name} <text>" });
  }
  await sock.sendMessage(from, { text: "🔹 ${display} response:\\n" + textArg });`;

  // final file: export async function
  const tpl = `/**
 * Plugin: ${display}
 * Purpose: ${purpose}
 * Generated: ${new Date().toISOString()}
 *
 * Note: Replace the demo implementation with real logic if needed.
 */
module.exports = async (sock, m, args, ctx) => {
  const from = m.key ? (m.key.remoteJid || m.key.participant || '') : '';
  try {
${body.split('\n').map(l => '    ' + l).join('\n')}
  } catch (e) {
    console.error("[plugin error] ${display}", e);
    try { await sock.sendMessage(from, { text: "❌ Error in ${display}: " + (e.message || e) }); } catch {}
  }
};\n`;
  return tpl;
}

// Keep a small set of special named plugins (so menus include human-friendly names)
const specialNames = {
  ai: ['gpt', 'imagine', 'translate', 'summarize', 'chat'],
  downloader: ['play', 'video', 'tiktok', 'twitter', 'instagram', 'ytmp3', 'ytmp4', 'gdrive'],
  audio: ['tomp3', 'topt', 'volaudio', 'speed', 'reverse', 'robot'],
  image: ['sticker', 'remini', 'bgremove', 'makeavatar', 'resize', 'neon'],
  fun: ['joke', 'meme', 'quote', '8ball', 'trivia'],
  games: ['hangman', 'riddle', 'tictactoe', 'quiz', 'guessnumber'],
  group: ['add', 'kick', 'promote', 'demote', 'welcome', 'setdesc', 'tagall'],
  utils: ['uptime', 'whoami', 'calc', 'time-hd', 'usage', 'disk'],
  search: ['imdb', 'yts', 'lyrics', 'weather', 'shazam'],
  tools: ['qrcode', 'tinyurl', 'toimage', 'tourl', 'texttopdf'],
  media: ['gif2sticker', 'thumbnail', 'tovideo', 'toaudio', 'tomp4'],
  owner: ['setownername', 'setownernumber', 'restart', 'update', 'reload', 'setmenu'],
  nsfw: ['nsfwimg', 'nsfwvid', 'pornsearch'],
  programming: ['runcode', 'explain', 'docs', 'pkginfo'],
  math: ['add', 'sub', 'mul', 'div', 'sqrt']
};

// utilities for unique naming
function pad(n, len = 3) { return String(n).padStart(len, '0'); }

let totals = 0;
const created = [];

// create categories and files
for (const cat of categories) {
  const catDir = path.join(OUT, cat.name);
  if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

  // first create special names for category if any
  const specials = specialNames[cat.name] || [];
  let idx = 1;
  for (const s of specials) {
    if (idx > cat.count) break;
    const fname = `${s}.js`;
    const full = path.join(catDir, fname);
    const purpose = `Special plugin ${s} (${cat.name}) — demo (implement API calls inside).`;
    const apiEnv = (cat.name === 'ai') ? 'OPENAI_API_KEY' : (cat.name === 'search' && s === 'imdb') ? 'IMDB_API_KEY' : null;
    fs.writeFileSync(full, pluginTemplate({ category: cat.name, name: s, purpose, apiEnvVar: apiEnv }));
    created.push(path.relative(process.cwd(), full));
    totals++;
    idx++;
  }

  // fill remainder with generated plugin names
  while (idx <= cat.count) {
    const base = `${cat.name}-extra-${pad(idx)}`;
    const fname = `${base}.js`;
    const full = path.join(catDir, fname);
    const purpose = `Auto-generated plugin #${idx} for category ${cat.name}`;
    // choose a realistic API requirement for some categories
    let apiEnv = null;
    if (cat.name === 'ai' && (idx % 3 === 0)) apiEnv = 'OPENAI_API_KEY';
    if (cat.name === 'downloader' && (idx % 5 === 0)) apiEnv = 'YOUTUBE_API_KEY';
    if (cat.name === 'image' && (idx % 7 === 0)) apiEnv = 'PIXABAY_KEY';
    if (cat.name === 'search' && (idx % 4 === 0)) apiEnv = 'NEWS_API_KEY';
    if (cat.name === 'nsfw') apiEnv = 'NSFW_API_KEY';
    if (cat.name === 'tools' && base.includes('qrcode')) apiEnv = null;
    fs.writeFileSync(full, pluginTemplate({ category: cat.name, name: base, purpose, apiEnvVar: apiEnv }));
    created.push(path.relative(process.cwd(), full));
    totals++;
    idx++;
  }
}

console.log(`✅ Generated ${totals} plugin files under ${OUT}`);

// create README_plugins.txt
const readme = [
  "# Abdullah-XMD Plugins (generated)",
  "",
  `Total plugins generated: ${totals}`,
  "",
  "Structure: plugins/<category>/*.js",
  "",
  "Each plugin exports an async function: module.exports = async (sock,m,args,ctx) => { ... }",
  "",
  "Plugins that require APIs check for an environment variable and will prompt:",
  "  _api_paste_here_ (in .env) or set real keys in .env",
  "",
  "Important:",
  "- Do NOT commit real API keys. Use .env on your deployment server.",
  "- To enable/disable plugins, modify your index.js plugin loader to read plugins/* and control via settings.json",
  ""
].join('\n');
fs.writeFileSync(path.join(process.cwd(), 'README_plugins.txt'), readme);

// create settings.json (starter)
const settings = {
  prefix: process.env.PREFIX || ".",
  botName: process.env.BOT_NAME || "Abdullah-XMD",
  owners: [process.env.OWNER_NUMBER || "YOUR_NUMBER"],
  menuStyle: 1,
  publicMode: true,
  disabledPlugins: []
};
fs.writeFileSync(path.join(process.cwd(), 'settings.json'), JSON.stringify(settings, null, 2));

console.log('✅ Created README_plugins.txt and settings.json');

// Optionally create a zip using the zip CLI if present
function which(cmd) {
  try {
    const p = cp.execSync(`which ${cmd}`, { stdio: ['pipe','pipe','pipe'] }).toString().trim();
    return p || null;
  } catch (e) { return null; }
}

const zipPath = path.join(process.cwd(), `Abdullah-XMD-Plugins-${totals}.zip`);
if (which('zip')) {
  try {
    // zip everything inside plugins/ and README/settings
    console.log('📦 Creating ZIP archive (using system zip)...');
    // -r recurse, -q quiet
    cp.execSync(`zip -r -q "${zipPath}" plugins README_plugins.txt settings.json`, { stdio: 'inherit' });
    console.log(`✅ ZIP created: ${zipPath}`);
  } catch (e) {
    console.warn('⚠️ ZIP creation failed (zip CLI error). You can create ZIP manually: zip -r my.zip plugins README_plugins.txt settings.json');
  }
} else {
  console.log('ℹ️ zip CLI not found. To create a zip on Termux, install `pkg install zip` then run:');
  console.log(`   zip -r "${zipPath}" plugins README_plugins.txt settings.json`);
}

console.log('All done. Next steps (Termux):');
console.log(' 1) Inspect plugins folder.');
console.log(' 2) Copy plugins to your repo or push to GitHub (see instructions).');
console.log(' 3) Update your index.js loader to read plugins/ and load them (module.exports function style supported).');

