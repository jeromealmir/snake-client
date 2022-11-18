const connect = require('./client');

console.log('Connecting...');

connect();

const setupInput = () => {
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
};

setupInput();
