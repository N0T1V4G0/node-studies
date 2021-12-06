const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/overview') {
    res.end('Hello from home!');
  } else if (req.url === '/product') {
    res.end('Hello from products');
  } else {
    res.writeHead(404);
    res.end('Page not found!');
  }
});

server.listen(3000, '127.0.0.1', () => console.log('server running'));
