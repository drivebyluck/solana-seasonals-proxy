const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/seasonals", async (req, res) => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=max&interval=daily");
    const data = response.data;

    // Here you would add logic to aggregate monthly averages over 5 years
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch seasonals", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});