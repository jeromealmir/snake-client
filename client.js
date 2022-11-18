const net = require('net');
const {IP, PORT} = require('./constant');

//establishes a connection with the game server
const connect = () => {
  const conn =  net.createConnection({
    host: IP, // IP address here,
    port: PORT //PORT number here,
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;