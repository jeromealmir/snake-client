//WASD movement keys import from constant
const { keys } = require('./constant');

const commandLine = process.argv.slice(2);

//represents the conn object
let connection;

const setupInput = (conn) => {

  connection = conn;

  //stdin handles user input
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  //set snake initials from command line
  connection.write(`Name: ${commandLine}`);

  return stdin;
};

const handleUserInput = (key) => {

  //loop through keys object and send command to server
  for (const k in keys) {
    if (k === key) {
      connection.write(keys[k]);
    }

    //terminate the game by pressing ctrl + c
    if (key === '\u0003' || key === 'q') {
      console.log('Thank you for playing!');
      process.exit();
    }
  }

};

module.exports = setupInput;