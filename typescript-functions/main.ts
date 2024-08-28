/* A function named convertMinutesToSeconds is being defined with one parameter,
minutes of type number, and a return type of number.
 */
function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}
/* The log method of the console object is being called with one argument, a string.
The log method of the console object is being called with one argument, a string. */
console.log(`5 minutes is ${convertMinutesToSeconds(5)} seconds.`);
console.log(`10 minutes is ${convertMinutesToSeconds(10)} seconds.`);

/* A function named greet is being defined with one parameter, name of type string,
and a return type of string.
The variable greeting is equal to the type of string with the parameter name */
function greet(name: string): string {
  const greeting: string = 'Hey ' + name + '!';
  return greeting;
}
/* The log method of the console object is being called with one argument, a string of
the function greet.
The log method of the console object is being called with one argument, a string of
the function greet. */
console.log(greet('Tré'));
console.log(greet('Mike'));

/*  */
const getArea = (width: number, height: number): number => {
  return width * height;
};
/* The log method of the console object is being called with two arguments, a string &
the numbers of the function getArea.
The log method of the console object is being called with two arguments, a string &
the numbers of the function getArea. */
console.log('The area of the two numbers 17 & 42:', getArea(17, 42));
console.log('The area of the two numbers 22 & 38:', getArea(22, 38));

/* A new interface Person is being declared.
The firstName & lastName properties will have the value of string.
 */
interface Person {
  firstName: string;
  lastName?: string;
}
const getFirstName = (person: Person): string => {
  return person.firstName;
};
const person: Person = { firstName: 'Lelouche', lastName: 'Lamperouge' };
const firstName: string = getFirstName(person);
console.log(`The first name is ${firstName}.`);

/*  */
const getLastElement = (array: any[]): any[] => {
  return array[array.length - 1];
};
/* The log method of the console object is being called with two arguments, a string &
the array of the function getLastElement.
The log method of the console object is being called with two arguments, a string &
the array of the function geLastElement. */
console.log(
  'The last element of getLastElement is:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'The last element of getLastElement is:',
  getLastElement([true, true, false, true])
);

/*  */
function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

const callOtherFunctionResult: number = callOtherFunction(
  convertMinutesToSeconds,
  10
);
/* The log method of the console object is being called with two arguments, a string &
the function callOtherFunction of the function convertMinutesToSeconds.
The log method of the console object is being called with two arguments, a string &
the function callOtherFunction of the function getLastElement. */
console.log('10 minutes converted to seconds is:', callOtherFunctionResult);
// console.log(
//   'The last element of getLastElement is:',
//   callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
// );
