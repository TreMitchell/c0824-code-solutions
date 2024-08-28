/* exported getAverageOfThreeNumbers */
function getAverageOfThreeNumbers(x: number, y: number, z: number): number {
  const average: number = (x + y + z) / 3;
  return average;
}
console.log(
  `The average of these three numbers are ${getAverageOfThreeNumbers(2, 4, 6)}.`
);
console.log(
  `The average of these three numbers are ${getAverageOfThreeNumbers(
    97,
    85,
    94
  )}.`
);
console.log(
  `The average of these three numbers are ${getAverageOfThreeNumbers(
    10,
    9,
    9
  )}.`
);
