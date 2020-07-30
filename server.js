const net = require('net');
const faker = require('faker');
const fs = require('fs');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

//create array of clients, to know who to send the files...?

server.on('connection', (client) => {
  
  console.log('New client connected!');
  client.write("Hello there!");
  client.setEncoding('utf8');
  client.on('data', (data) => {
    const message = parseMessage(data);
    if (message) {
      console.log(message);
      fs.readFile(`./${message}`, (error, data) => {
        client.write(data);
      });
    }
  });
});

const parseMessage = function(message) {
  message = message.split(': ');
  if (message[0] === 'Request file') {
    console.log("Looking for file...");
    return message[1];
  }
}

const sendFile = function(fileName) {

}
