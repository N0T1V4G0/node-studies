const app = require('./app');

port = 3000;
app.listen(port, () => {
  console.log(`App running in port ${port}!`);
});