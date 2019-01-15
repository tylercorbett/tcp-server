const net = require('net');

const server = net.createServer((client) => {
  console.log('client connected');

  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
  });

  client.on('end', () => {
    console.log('client disconnected');
  });
  
});

module.exports = {
  server
};