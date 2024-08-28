'use strict';
/* exported getSquareOfNumber */
function getSquareOfNumber(number) {
  const squared = number ** 2;
  return squared;
}
console.log(`The square of 1 is ${getSquareOfNumber(1)}.`);
console.log(`The square of 2 is ${getSquareOfNumber(2)}.`);
console.log(`The square of 10 is ${getSquareOfNumber(10)}.`);
