'use strict';
/* exported pick */
function pick(source, keys) {
  const result = {};
  let index = 0;
  while (index < keys.length) {
    const key = keys[index];
    if (Object.call(source, key)) {
      result[key] = source[key];
    }
    index++;
  }
  return result;
}
