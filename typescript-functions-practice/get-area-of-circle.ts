/* exported getAreaOfCircle */
function getAreaOfCircle(radius: number): number {
  const area: number = Math.PI * radius ** 2;
  return area;
}
console.log(`The area of the circle is ${getAreaOfCircle(4.982787485166879)}.`);
console.log(
  `The area of the circle is ${getAreaOfCircle(2.6462837142006137)}.`
);
console.log(`The area of the circle is ${getAreaOfCircle(3)}.`);
