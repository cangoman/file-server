const net = require('net');
const fs = ('fs');


const fileName = 'hello_world.txt';


conn = net.createConnection({
  host: 'localhost',
  port: 3000
});


conn.setEncoding('utf8');

conn.on('connect', () => {
  conn.write('Request file: ' + fileName);
});

conn.on('data', (data) => {
  fs.writeFile((`./${fileName}`, data, (error) => {
    if (error) console.log('Error: ', error);
    else console.log('Receiving file...');
  }));
});