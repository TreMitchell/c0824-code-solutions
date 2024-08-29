'use strict';
/* Math object */
const heroes = ['Batman', 'Superman', 'Iron Man', 'Captain America'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Picking a random index:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Picking a random hero:', randomHero);
const library = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];
const lastBook = library.pop();
console.log(lastBook);
const firstBook = library.shift();
console.log(firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);
/* String methods */
const fullName = 'Tré Mitchell';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
/* Object methods */
const employee = {
  name: 'John Doe',
  age: '33',
  position: 'manager',
};
const employeeKeys = Object.keys(employee);
console.log(employeeKeys);
const employeeValues = Object.values(employee);
console.log(employeeValues);
const employeePairs = Object.entries(employee);
console.log(employeePairs);
