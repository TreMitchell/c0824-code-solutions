'use strict';
/* exported getLastCharacter */
function getLastCharacter(string) {
  const lastCharacter = string[string.length - 1];
  return lastCharacter;
}
console.log(`The last character in the element is ${getLastCharacter('foo')}.`);
console.log(
  `The last character in the element is ${getLastCharacter('ham sandwich')}.`
);
console.log(
  `The last of character in the element is ${getLastCharacter('arbitrary')}.`
);
