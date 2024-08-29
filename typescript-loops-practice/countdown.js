'use strict';
/* exported countdown */
function countdown(num) {
  const numCount = [];
  for (let i = num; i >= 0; i--) {
    numCount.push(i);
  }
  return numCount;
}
