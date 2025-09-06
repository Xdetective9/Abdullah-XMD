# Abdullah-XMD Plugins (generated)

Total plugins generated: 705

Structure: plugins/<category>/*.js

Each plugin exports an async function: module.exports = async (sock,m,args,ctx) => { ... }

Plugins that require APIs check for an environment variable and will prompt:
  _api_paste_here_ (in .env) or set real keys in .env

Important:
- Do NOT commit real API keys. Use .env on your deployment server.
- To enable/disable plugins, modify your index.js plugin loader to read plugins/* and control via settings.json
