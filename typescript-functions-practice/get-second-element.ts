/* exported getSecondElement */
function getSecondElement(array: unknown[]): unknown {
  const secondElement: unknown = array[1];
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
