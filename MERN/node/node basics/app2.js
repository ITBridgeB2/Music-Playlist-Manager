// app.js
const server = require('./blog');
const portNumber = process.argv[2];

if (!portNumber) {
  console.log("Please provide a port number.");
  process.exit(1);
}

server.start(portNumber);
