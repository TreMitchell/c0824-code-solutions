/* exported getSumOfSquares */
function getSumOfSquares(x: number, y: number): number {
  const sum: number = x ** 2 + y ** 2;
  return sum;
}
console.log(`The sum of 4^2 & 5^2 is ${getSumOfSquares(4, 5)}.`);
console.log(`The sum of 5^2 & 5^2 is ${getSumOfSquares(5, 5)}.`);
console.log(`The sum of 3^2 & 8^2 is ${getSumOfSquares(3, 8)}.`);
