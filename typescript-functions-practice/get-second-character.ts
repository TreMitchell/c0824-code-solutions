/* exported getSecondCharacter */
function getSecondCharacter(string: string): string {
  const secondCharacter: string = string[1];
  return secondCharacter;
}
console.log(
  `The second character of the array is ${getSecondCharacter('foo')}.`
);
console.log(
  `The second character of the array is ${getSecondCharacter('ham sandwich')}.`
);
console.log(
  `The second character of the array is ${getSecondCharacter('arbitrary')}.`
);
