const express = require('express');
const toursController = require('./../controllers/toursController');

const router = express.Router();

// router.param('id', toursController.checkId);

router
  .route('/')
  .get(toursController.getAllTours)
  .post(toursController.createNewTour);
router
  .route('/:id')
  .get(toursController.getTour)
  .patch(toursController.patchTour)
  .delete(toursController.deleteTour);

module.exports = router;
