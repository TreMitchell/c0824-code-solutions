/* exported getCharacterAtIndex */
function getCharacterAtIndex(string: string, index: number): unknown {
  const character: unknown = string[index];
  return character;
}
console.log(
  `The character of the string at index 1 is ${getCharacterAtIndex('foo', 1)}.`
);
console.log(
  `The character of the string at index 6 is ${getCharacterAtIndex(
    'turkey sandwich',
    6
  )}.`
);
console.log(
  `The element of the array at index 0 is ${getCharacterAtIndex(
    'absolutely',
    8
  )}.`
);
