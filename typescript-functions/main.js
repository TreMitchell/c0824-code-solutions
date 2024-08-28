'use strict';
/* A function named convertMinutesToSeconds is being defined with one parameter,
minutes of type number, and a return type of number.
 */
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
/* The log method of the console object is being called with one argument, a string.
The log method of the console object is being called with one argument, a string. */
console.log(`5 minutes is ${convertMinutesToSeconds(5)} seconds.`);
console.log(`10 minutes is ${convertMinutesToSeconds(10)} seconds.`);
/* A function named greet is being defined with one parameter, name of type string,
and a return type of string.
 */
function greet(name) {
  const greeting = 'Hey ' + name + '!';
  return greeting;
}
/* The log method of the console object is being called with one argument, a string of
the function greet.
The log method of the console object is being called with one argument, a string of
the function greet. */
console.log(greet('Tré'));
console.log(greet('Mike'));
/*  */
const getArea = (width, height) => {
  return width * height;
};
/* The log method of the console object is being called with two arguments, a string &
the numbers of the function getArea.
The log method of the console object is being called with two arguments, a string &
the numbers of the function getArea. */
console.log('The area of the two numbers 17 & 42:', getArea(17, 42));
console.log('The area of the two numbers 22 & 38:', getArea(22, 38));
const getFirstName = (person) => {
  return person.firstName;
};
const person = { firstName: 'Lelouche', lastName: 'Lamperouge' };
const firstName = getFirstName(person);
console.log(`The first name is ${firstName}.`);
/*  */
const getLastElement = (array) => {
  return array[array.length - 1];
};
/* The log method of the console object is being called with two arguments, a string &
the array of the function getLastElement.
The log method of the console object is being called with two arguments, a string &
the array of the function geLastElement. */
console.log(
  'The last element of getLastElement is:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'The last element of getLastElement is:',
  getLastElement([true, true, false, true])
);
/*  */
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
/* The log method of the console object is being called with two arguments, a string &
the function callOtherFunction of the function convertMinutesToSeconds.
The log method of the console object is being called with two arguments, a string &
the function callOtherFunction of the function getLastElement. */
console.log(
  '10 minutes converted to seconds is:',
  callOtherFunction(convertMinutesToSeconds, 10)
);
console.log(
  'The last element of getLastElement is:',
  callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
);
