/* exported getLastElement */
function getLastElement(array: unknown[]): unknown {
  const lastElement: unknown = array[array.length - 1];
  return lastElement;
}
console.log(
  `The last element in the array is ${getLastElement(['foo', 'bar', 'baz'])}.`
);
console.log(
  `The last element in the array is ${getLastElement([9, 10, 19, 20])}.`
);
console.log(
  `The last of element in the array is ${getLastElement([false, true])}.`
);
