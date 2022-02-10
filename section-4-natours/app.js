const express = require('express');
const toursRouter = require('./routes/toursRoutes');
const userRouter = require('./routes/usersRoutes');

// 1) SERVER
const app = express();
// 2) MIDDLEWARE
app.use(express.json());
// Custom middleware
app.use((req, res, next) => {
  req.body.exemple = 'Whatever works';
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
