let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(); // <= stream is paused by default so stdin.resume() needs to be called to read from it!
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {

  if (key === '\u0003') {
    console.log('Thank you for playing!');
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === 'm') {
    connection.write('Say: Let\'s go!');
  }

};


module.exports = setupInput;