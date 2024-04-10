const { ChronoUnit, LocalDate } = require('@js-joda/core');

const prompt = require('prompt-sync')();

function greet(...names) {
  names.forEach(n => {
    if (!n) {
      throw new Error("Please enter valid name");
    }
  })
  return `Welcome to SALT, ${names.join(" and ")}`.trim();
}

function calculateDays(startDate) {
  var currentDate = LocalDate.now();
  var daysLeft = currentDate.until(LocalDate.parse(startDate), ChronoUnit.DAYS);
  return "Today it is " + daysLeft + " days left until the course starts"
}

// Main program
/*const name = prompt('What is your name? ');
const greeting = greet(name);
console.log(greeting);

const startDate = prompt('When does that course start? ');
const daysLeft = calculateDays(startDate);
console.log(daysLeft);*/

module.exports.greet = greet;