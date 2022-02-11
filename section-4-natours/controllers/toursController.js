const fs = require('fs');

const toursData = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

exports.checkId = (req, res, next, val) => {
  const tourId = val * 1;
  const tour = toursData.find((el) => el.id === tourId);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!(req.body.name && req.body.price)) {
    return res.status(400).json({
      status: 'fail',
      message: 'missing tour name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: toursData.length,
    data: {
      tours: toursData,
    },
  });
};

exports.postNewTour = (req, res) => {
  const newId = toursData[toursData.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };
  const newTours = JSON.stringify([...toursData, newTour]);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
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

exports.getTour = (req, res) => {
  const tour = toursData.find((el) => el.id === req.params.id * 1);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.patchTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  // status 204 = no content
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
