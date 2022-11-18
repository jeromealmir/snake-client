const net = require('net');

//establishes a connection with the game server
const connect = () => {
  const conn =  net.createConnection({
    host: '10.0.0.243', // IP address here,
    port: 50541 //PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting...');
connect();