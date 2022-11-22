//import connect and setupInput function
const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting...');

//connect() is passed as variable here so setupInput can use conn object by connect function
setupInput(connect());
