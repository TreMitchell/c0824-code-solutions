'use strict';
/* exported getFirstElement */
function getFirstElement(array) {
  const firstElement = array[0];
  return firstElement;
}
console.log(
  `The first element of the array is ${getFirstElement(['foo', 'bar', 'baz'])}.`
);
console.log(
  `The first  element of the array is ${getFirstElement([9, 10, 19, 20])}.`
);
console.log(
  `The first element of the array is ${getFirstElement([false, true])}.`
);
