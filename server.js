const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// TEMP DATA SOURCE: Replace this block later with real monthly returns from a reliable source or spreadsheet
const mockData = {
  "January": { averageReturn: 12.3, years: 5 },
  "February": { averageReturn: -2.1, years: 5 },
  "March": { averageReturn: 5.4, years: 5 },
  "April": { averageReturn: 3.1, years: 5 },
  "May": { averageReturn: -1.2, years: 5 },
  "June": { averageReturn: 7.9, years: 5 },
  "July": { averageReturn: 6.2, years: 5 },
  "August": { averageReturn: -3.0, years: 5 },
  "September": { averageReturn: -5.6, years: 5 },
  "October": { averageReturn: 4.8, years: 5 },
  "November": { averageReturn: 8.1, years: 5 },
  "December": { averageReturn: 10.5, years: 5 }
};

app.get('/api/seasonals', (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
