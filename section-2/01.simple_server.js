const { readFileSync } = require('fs');
const http = require('http');

// Top level code só vai ser executado uma vez.
data = readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
// Esse código vai ser executado toda vez que o server receber um request.
const server = http.createServer((req, res) => {
  // req.url é a url em que a requisição do usuário foi feita.
  if (req.url === '/' || req.url === '/overview') {
    // res.end retorna algo para o client.
    res.end('Hello from home!');
  } else if (req.url === '/product') {
    res.end('Hello from products');
  } else if (req.url === '/api') {
    // res.writeHead aceita dois argumentos, o status code da response,
    // e os response headers, em forma de objeto.
    // 'Content-type' é um header com o tipo do retorno.
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    // res.end precisa retornar uma string.
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'luke',
    });
    res.end('Page not found!');
  }
});

server.listen(3000, '127.0.0.1', () => console.log('server running')); // Vai rodar o server.
