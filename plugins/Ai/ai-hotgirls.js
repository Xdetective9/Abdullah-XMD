const axios = require("axios");

module.exports = {
  name: "ai-hotgirls",
  alias: ["hot","sexy"],
  desc: "Fetch hot girl random photo (pixabay)",
  category: "ai",
  usage: "ai-hotgirls",
  react: "🔥",
  start: async (m, { sendFile }) => {
    try {
      const KEY = process.env.PIXABAY_KEY;
      const res = await axios.get(`https://pixabay.com/api/?key=${KEY}&q=sexy+girl&image_type=photo&per_page=50`);
      const hits = res.data.hits;
      const item = hits[Math.floor(Math.random()*hits.length)];
      await sendFile(m.from, item.largeImageURL, "hot.jpg", m, { caption: "🔥 Hot Girl" });
    } catch (e) {
      m.reply("🚫 Pixabay error: " + (e.response?.data || e.message));
    }
  }
};
