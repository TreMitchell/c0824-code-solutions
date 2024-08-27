/* The number 9200 is being assigned to the variable number of type number.
The string Irvine Center Drive is being assigned to the variable street of type
number.
A template literal interpolating the variables number & street is being
assigned to the variable address. */
const number = 9200;
const street = 'Irvine Center Drive';
const interpolatedAddress = `${number} ${street}`; /* changed this line */
/* The log method of the console object is being called with two parameters, a
string & the variable address. */
console.log('LearningFuze:', interpolatedAddress);

/* The string Uzair is being assigned to the variable firstName of type string.
The string Ashraf is being assigned to the variable lastName of type string.
The number 25 is being assigned to the variable age of type number. */
const firstName = 'Uzair';
const lastName = 'Ashraf';
const age = 25;

/* changed this line; A template literal interpolating the variables
firstName & lastName is being assigned to the variable bio. */
const interpolatedBio = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

/* The log method of the console object is being called with two parameters, a
string & the variable bio. */
console.log('Bio:', interpolatedBio);

/* The string apple is being assigned to the variable fruit of type string.
The string pen is being assigned to the variable item of type string. */
const fruit = 'apple';
const item = 'pen';

/* A template literal interpolating the variables
fruit & item is being assigned to the variable ApplePen. */
const interpolatedApplePen = `${fruit}${item}`; /* changed this line */

/* The log method of the console object is being called with two parameters, a
string & the variable item.
The log method of the console object is being called with two parameters, a
string & the variable fruit.
 The log method of the console object is being called with one parameter,
 the variable ApplePen. */
console.log('I have a', item);
console.log('I have an', fruit);
console.log(interpolatedApplePen);
