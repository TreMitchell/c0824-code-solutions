/* exported getRightTriangleArea */
function getRightTriangleArea(base: number, height: number): number {
  const area: number = (base * height) / 2;
  return area;
}
console.log(
  `The area for this right triangle is: ${getRightTriangleArea(3, 4)}.`
);
console.log(
  `The area for this right triangle is: ${getRightTriangleArea(5, 8)}.`
);
console.log(
  `The area for this right triangle is: ${getRightTriangleArea(6, 6)}.`
);
