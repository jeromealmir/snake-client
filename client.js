const net = require('net');

//import IP and PORT number from constant file
const {IP, PORT} = require('./constant');

//establishes a connection with the game server
const connect = () => {
  const conn =  net.createConnection({
    host: IP,
    port: PORT
  });

  //event listener that logs a message when connection is successfully established
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
  });

  //receive and log data sent by server
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  });

  //event listener that logs a message when connection is terminated
  conn.on('end', () => {
    console.log('Game Over!');
    process.exit();
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;