const net = require('net');

//establishes a connection with the game server
const connect = () => {
  const conn =  net.createConnection({
    host: '10.0.0.243', // IP address here,
    port: 50541 //PORT number here,
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write('Name: JAL');
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;