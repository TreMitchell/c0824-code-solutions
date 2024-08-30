/* exported reverse */
function reverse(array: unknown[]): unknown {
  const backwards: unknown[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
