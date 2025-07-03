const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

const seasonalData = {
  "January": {
    returnsByYear: {
      "2021": 9.8,
      "2022": 14.2,
      "2023": 10.5,
      "2024": 12.7,
      "2025": 13.4
    }
  },
  "February": {
    returnsByYear: {
      "2021": -2.3,
      "2022": -1.5,
      "2023": 0.0,
      "2024": -3.1,
      "2025": 1.4
    }
  },
  "March": {
    returnsByYear: {
      "2021": 3.1,
      "2022": 7.2,
      "2023": 6.4,
      "2024": 4.8,
      "2025": 5.6
    }
  },
  "April": {
    returnsByYear: {
      "2021": 5.4,
      "2022": 2.1,
      "2023": 3.3,
      "2024": 1.6,
      "2025": 3.2
    }
  },
  "May": {
    returnsByYear: {
      "2021": -0.5,
      "2022": -2.0,
      "2023": -1.0,
      "2024": -2.7,
      "2025": 0.1
    }
  },
  "June": {
    returnsByYear: {
      "2021": 6.3,
      "2022": 8.1,
      "2023": 9.2,
      "2024": 6.4,
      "2025": 5.4
    }
  },
  "July": {
    returnsByYear: {
      "2021": 5.2,
      "2022": 7.6,
      "2023": 6.1,
      "2024": 5.9,
      "2025": 7.0
    }
  },
  "August": {
    returnsByYear: {
      "2021": -1.2,
      "2022": -2.8,
      "2023": -0.5,
      "2024": -3.4,
      "2025": -1.9
    }
  },
  "September": {
    returnsByYear: {
      "2021": -6.2,
      "2022": -4.5,
      "2023": -5.1,
      "2024": -5.3,
      "2025": -7.0
    }
  },
  "October": {
    returnsByYear: {
      "2021": 2.7,
      "2022": 6.1,
      "2023": 5.9,
      "2024": 4.2,
      "2025": 5.2
    }
  },
  "November": {
    returnsByYear: {
      "2021": 8.4,
      "2022": 7.9,
      "2023": 9.0,
      "2024": 6.7,
      "2025": 8.6
    }
  },
  "December": {
    returnsByYear: {
      "2021": 11.2,
      "2022": 10.1,
      "2023": 12.4,
      "2024": 9.8,
      "2025": 9.3
    }
  }
};

// Add average return calculation
for (const month in seasonalData) {
  const yearReturns = seasonalData[month].returnsByYear;
  const values = Object.values(yearReturns);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  seasonalData[month].averageReturn = parseFloat(avg.toFixed(1));
}

app.get("/api/seasonals", (req, res) => {
  res.json(seasonalData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
