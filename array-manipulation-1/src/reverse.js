'use strict';
/* exported reverse */
function reverse(array) {
  const backwards = [];
  for (let i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
