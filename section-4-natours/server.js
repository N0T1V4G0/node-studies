const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

console.log(process.env.NODE_ENV);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((conObj) => {
    console.log('db running');
    // console.log(conObj.connections);
  });

port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running in port ${port}!`);
});
