const { keys } = require('./constant');
const commandLine = process.argv.slice(2);

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(); // <= stream is paused by default so stdin.resume() needs to be called to read from it!
  stdin.on('data', handleUserInput);
  connection.write(`Name: ${commandLine}`);
  return stdin;
};

const handleUserInput = (key) => {

  for (const k in keys) {
    if (k === key) {
      connection.write(keys[k]);
    }
    if (key === '\u0003') {
      console.log('Thank you for playing!');
      process.exit();
    }
  }

};

module.exports = setupInput;