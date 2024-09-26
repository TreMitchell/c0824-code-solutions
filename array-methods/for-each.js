'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((value) => console.log('In order:', value));
values.forEach((_, index) =>
  console.log('Reverse order:', values[values.length - 1 - index])
);
