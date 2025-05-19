// blog.js
const fs = require('fs');
const http = require('http');

function start(port) {
  const server = http.createServer((req, res) => {
    try {
      const readMe = fs.readFileSync('blog.txt', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(readMe);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading blog.txt');
    }
  });

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = { start };
