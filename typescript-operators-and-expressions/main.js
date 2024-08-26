'use strict';
/* The number 3 is being assigned to the variable width of type number.
The number 5 is being assigned to the variable height of type number.
The result of the expression width times height is being assigned to the variable
area.
The log method of the console object is being called by two arguments, a string and
the variable area.
The log method of the console object is being called by two arguments, a string and
the typeof area. */
const width = 3;
const height = 5;
const area = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);
/* The floating point number 14.99 is being assigned to the variable width of type
number.
The floating point number 19.99 is being assigned to the variable width of type
number.
The result of the expression payment - bill is being assigned to the variable
change.
The log method of the console object is being called by two arguments, a string and
the variable change.
The log method of the console object is being called by two arguments, a string and
the typeof change. */
const bill = 14.99;
const payment = 19.99;
const change = Math.round(payment - bill); /* Math.round works */
console.log('value of change:', change);
console.log('typeof change:', typeof change);
/* The number 90 is being assigned to the variable quizzes of type number.
The number 95 is being assigned to the variable quizzes of type number.
The number 90 is being assigned to the variable quizzes of type number.
The result of the expression (quizzes + midterm + final) together being divided
by 3 is being assigned to the variable change.
The log method of the console object is being called by two arguments, a string and
the variable grade.
The log method of the console object is being called by two arguments, a string and
the typeof grade. */
const quizzes = 90;
const midterm = 95;
const final = 90;
const grade = Math.round((quizzes + midterm + final) / 3);
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);
/* The string Tré is being assigned to the variable firstName of type string.
The string Mitchell is being assigned to the variable lastName of type string.
The result of the expression firstName concatenated with a string, being
concatenated with lastName is assigned to the variable fullName.
The log method of the console object is being called by two arguments, a string and
the variable fullName.
The log method of the console object is being called by two arguments, a string and
the typeof fullName. */
const firstName = 'Tré';
const lastName = 'Mitchell';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);
/* The number 12 is being assigned to the variable pH of type number.
The result of the operators ph < 7 is being assigned to the variable isAcidic.
The log method of the console object is being called by two arguments, a string and
the variable isAcidic.
The log method of the console object is being called by two arguments, a string and
the typeof isAcidic. */
const pH = 12;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);
/* The number 300 is being assigned to the variable headCount of type number.
The result of the operators headCount === 300 is being assigned to the variable
isSparta.
The log method of the console object is being called by two arguments, a string and
the variable isSparta.
The log method of the console object is being called by two arguments, a string and
the typeof isSparta. */
const headCount = 300;
const isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);
/* The string value of the variable motto is being concatenated with ' is the GOAT',
and the result of that expression is being reassigned to the variable motto.
The log method of the console object is being called by two arguments, a string and
the variable motto.
The log method of the console object is being called by two arguments, a string and
the typeof motto. */
let motto = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto', typeof motto);
