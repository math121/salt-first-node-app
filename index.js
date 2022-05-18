const prompt = require('prompt-sync')();

function greet(namePassedIn) {
  return 'Welcome to SALT, ';
}

// Main program
const name = prompt('What is your name? ');
const greeting = greet(name);
console.log(greeting);

module.exports.greet = greet;