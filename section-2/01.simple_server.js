const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from port 3000!');
});

server.listen(3000, '127.0.0.1', () => console.log('server running'));
