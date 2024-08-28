/* exported getLengthOfArray */
function getLengthOfArray(array: unknown[]): unknown {
  const length: unknown = array.length;
  return length;
}
console.log(
  `The length of the array is ${getLengthOfArray(['foo', 'bar', 'baz'])}.`
);
console.log(`The length of the array is ${getLengthOfArray([9, 10, 19, 20])}.`);
console.log(`The length of the array is ${getLengthOfArray([false, true])}.`);
