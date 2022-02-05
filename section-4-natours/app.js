const fs = require('fs');
const express = require('express');

// SERVER
const app = express();
const toursData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

//Middleware
app.use(express.json());

// api/tours ROUTES
// GET all tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: toursData.length,
    data: {
      tours: toursData,
    },
  });
});
// POST tour
app.post('/api/v1/tours', (req, res) => {
  const newId = toursData[toursData.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };
  const newTours = JSON.stringify([...toursData, newTour]);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    newTours,
    (err) => {
      // status 201 = created
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});
// GET single tour
app.get('/api/v1/tours/:id', (req, res) => {
  const tourId = req.params.id * 1;
  const tour = toursData.find((el) => el.id === tourId);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

// SERVER LISTEN
port = 3000;
app.listen(port, () => {
  console.log(`App running in port ${port}!`);
});
