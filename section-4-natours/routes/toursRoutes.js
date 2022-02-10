const express = require('express');
const toursController = require('./../controllers/toursController');

const router = express.Router();

router
  .route('/')
  .get(toursController.getAllTours)
  .post(toursController.postNewTour);
router
  .route('/:id')
  .get(toursController.getTour)
  .patch(toursController.patchTour)
  .delete(toursController.deleteTour);

module.exports = router;
