const fs = require('fs');
const express = require('express');

// 1) SERVER
const app = express();
const toursData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

// 2) MIDDLEWARE
app.use(express.json());
// Custom middleware
app.use((req, res, next) => {
  req.body.exemple = 'Whatever works';
  next();
});

// 3) ROUTE HANDLERS
const getAllTours = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    results: toursData.length,
    data: {
      tours: toursData,
    },
  });
};

const postNewTour = (req, res) => {
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
};

const getTour = (req, res) => {
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
};

const patchTour = (req, res) => {
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
      tour: '<Updated tour here>',
    },
  });
};

const deleteTour = (req, res) => {
  const tourId = req.params.id * 1;
  const tour = toursData.find((el) => el.id === tourId);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  // status 204 = no content
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
// 4) ROUTES
app.route('/api/v1/tours').get(getAllTours).post(postNewTour);
app.route('/api/v1/tours/:id').get(getTour).patch(patchTour).delete(deleteTour);

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', postNewTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', patchTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 5) SERVER LISTEN
port = 3000;
app.listen(port, () => {
  console.log(`App running in port ${port}!`);
});
