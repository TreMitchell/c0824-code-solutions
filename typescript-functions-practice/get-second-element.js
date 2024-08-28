'use strict';
/* exported getSecondElement */
function getSecondElement(array) {
  const secondElement = array[1];
  return secondElement;
}
console.log(
  `The second element in the array is ${getSecondElement([
    'foo',
    'bar',
    'baz',
  ])}.`
);
console.log(
  `The second element in the array is ${getSecondElement([9, 10, 19, 20])}.`
);
console.log(
  `The second element in the array is ${getFirstElement([false, true])}.`
);
