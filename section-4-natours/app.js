const fs = require('fs');
const express = require('express');

// SERVER
const app = express();
const toursData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

// api/tours ROUTE
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: toursData.length,
    data: {
      tours: toursData,
    },
  });
});

// SERVER LISTEN
port = 3000;
app.listen(port, () => {
  console.log(`App running in port ${port}!`);
});
