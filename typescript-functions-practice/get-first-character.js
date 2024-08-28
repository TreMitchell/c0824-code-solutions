'use strict';
/* exported getFirstCharacter */
function getFirstCharacter(string) {
  const firstCharacter = string[0];
  return firstCharacter;
}
console.log(`The first character of the array is ${getFirstCharacter('foo')}.`);
console.log(
  `The first character of the array is ${getFirstCharacter('ham sandwich')}.`
);
console.log(
  `The first character of the array is ${getFirstCharacter('arbitrary')}.`
);
