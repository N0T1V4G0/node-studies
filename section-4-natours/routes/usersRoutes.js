const express = require('express');
const usersControllers = require('./../controllers/usersController');

const router = express.Router();

router
  .route('/')
  .get(usersControllers.getAllUsers)
  .post(usersControllers.createNewUser);
router
  .route('/:id')
  .get(usersControllers.getUser)
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

module.exports = router;
