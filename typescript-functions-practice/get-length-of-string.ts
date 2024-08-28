/* exported getLengthOfString */
function getLengthOfString(string: string): number {
  const length: number = string.length;
  return length;
}
console.log(`The length of the string is ${getLengthOfString('foo')}.`);
console.log(
  `The length of the string is ${getLengthOfString('ham sandwich')}.`
);
console.log(`The length of the string is ${getLengthOfString('arbitrary')}.`);
