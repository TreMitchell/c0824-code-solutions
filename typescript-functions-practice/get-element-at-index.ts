/* exported getElementAtIndex */
function getElementAtIndex(array: unknown[], index: number): unknown {
  const element: unknown = array[index];
  return element;
}
console.log(
  `The element of the array at index 1 is ${getElementAtIndex(
    ['foo', 'bar', 'baz'],
    1
  )}.`
);
console.log(
  `The element of the array at index 2 is ${getElementAtIndex(
    [9, 10, 19, 20],
    2
  )}.`
);
console.log(
  `The element of the array at index 0 is ${getElementAtIndex(
    [false, true],
    0
  )}.`
);
