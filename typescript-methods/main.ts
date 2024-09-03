/* Math object */
/* The array is being assigned to the variable heroes of type string[].

The array is being assigned to the variable heroes of type string[].
The variable heroes is calling the parameter randomIndex to the variable
randomHero of type string.
The log method of the console object is being called by two arguments, a string and
the variables randomNumber & randomHero. */
const heroes: string[] = ['Batman', 'Superman', 'Iron Man', 'Captain America'];
let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Picking a random index:', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('Picking a random hero:', randomHero);

/* Array methods */
/* A new interface Book is being declared.
The title & author properties will have the value of string. */
interface Book {
  title: string;
  author: string;
}
/* An object literal is being assigned to the variable library of type Book.
The strings are being assigned to the properties title & author. */
const library: Book[] = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];
/*
The log method of the console object is being called by one arguments,
the variable lastBook. */
const lastBook: Book | undefined = library.pop();
console.log(lastBook);
/*
The log method of the console object is being called by one arguments,
the variable firstBook. */
const firstBook: Book | undefined = library.shift();
console.log(firstBook);
/* An object literal is being assigned to the variables js and css of type Book.
The strings are being assigned to the properties title & author. */
const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

/*



The log method of the console object is being called by two arguments,the
variable library. */
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

/* String methods */
const fullName: string = 'Tré Mitchell';
const firstAndLastName: string[] = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

/* Object methods */
/* The properties name, age, and position are being assigned to variable employee. */
const employee = {
  name: 'John Doe',
  age: '33',
  position: 'manager',
};
/* The keys method of the Object object is being called with one argument, the variable
employee is being assigned to the variable employeeKeys.
The log method of the console object is being called by two arguments, a string and
the variable employeeKeys.
The values method of the Object object is being called with one argument, the variable
employee is being assigned to the variable employeeValues.
The log method of the console object is being called by two arguments, a string and
the variable employeeValues.
The entries method of the Object object is being called with one argument, the
variable employee is being assigned to the variable employeePairs.
The log method of the console object is being called by two arguments, a string and
the variable employeePairs. */
const employeeKeys: string[] = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues: string[] = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs: unknown[] = Object.entries(employee);
console.log('employeePairs:', employeePairs);
