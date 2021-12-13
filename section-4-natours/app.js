const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server');
});

app.post('/', (req, res) => {
  res.send('You can post in this route...');
});

app.get('/user', (req, res) => {
  res.json({ name: 'luke', age: 28, isSingle: true });
});

app.listen(3000, () => {
  console.log('App running...');
});
