/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

/* The function ...  is being defined with a parameter ... of type number and of type boolean.
 */
function isUnderFive(number: number): boolean {
  const isLessThanFive: boolean = number < 5;
  return isLessThanFive;
}
/* The log method of the console object is being called by two arguments, a string
& the numbers being called by the variable isUnderFive.
*/
console.log('Is 4 < 5?:', isUnderFive(4));
console.log('Is 9 < 5?:', isUnderFive(9));

/* The function ...  is being defined with a parameter ... of type number and of type boolean.
 */
function isEven(number: number): boolean {
  const isNumberEven: boolean = number % 2 === 0;
  return isNumberEven;
}
/* The log method of the console object is being called by two arguments, a string
& the numbers being called by the variable isEven. */
console.log('Is 4 divisible by 2?:', isEven(4));
console.log('Is 9 divisible by 2?:', isEven(9));

/* A function is being defined with a string object of type string and of type boolean
 */
function startsWithJ(string: string): boolean {
  const characterStartWithJ: boolean = string[0] === 'J';
  return characterStartWithJ;
}
/* The log method of the console object is being called by two arguments, a string
& the strings being called by the variable startsWithJ. */
console.log('Does JavaScript start with J?:', startsWithJ('JavaScript'));
console.log('Does CSS start with J?:', startsWithJ('CSS'));

/* A new interface Person is being declared.
The name & age properties will have the value of string. */
interface Person {
  name?: string;
  age: number;
}
/* The function ...  is being defined with a parameter ... of type Person and of type boolean.
 */
function isOldEnoughToDrink(person: Person): boolean {
  const isLegalToDrink: boolean = person.age >= 21;
  return isLegalToDrink;
}
/* The commands are in the console */

/* The function ...  is being defined with a parameter ... of type Person and of type boolean.
 */
function isOldEnoughToDrive(person: Person): boolean {
  const isLegalToDrive: boolean = person.age >= 16;
  return isLegalToDrive;
} /* The commands are in the console */

/* The function ...  is being defined with a parameter ... of type Person and of type boolean.
The variable isLegalToDrive is being conditional statement person.age >= 16.
 */
function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  const isLegalToDrink: boolean = person.age >= 21;
  const isLegalToDrive: boolean = person.age >= 16;
  if (isLegalToDrink && isLegalToDrive) {
    return false;
  }
  return false;
}

/* The function ...  is being defined with a parameter ... of type number and of type string.
There is an if statement with a conditional expression checking if ph is less than 0 or pH > 14 and an opening curly brace for the code block.
There is an else if statement with a conditional expression checking if ph is less than 0 or pH > 14 and an opening curly brace for the code block.
The strings are being returned. */
function categorizeAcidity(pH: number): string {
  if (pH < 0 || pH > 14) {
    return 'Invalid pH level';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7) {
    return 'base';
  } else {
    return 'acid';
  }
}
/* The log method of the console object is being called by two arguments, a string &
the number being called by the variable categorizeAcidity. */
console.log('acidic level:', categorizeAcidity(12));

/* The function ...  is being defined with a parameter ... of type string and of type string.
There is a switch statement with a conditional expression evaluating the variable name.
There is a case clause checking for the strings yakko, wakko, and dot.
There is a default clause.
We are returning a string. */
function introduceWarnerBro(name: string): string {
  switch (name.toLowerCase()) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute";
    default:
      return 'Goodnight everybody!';
  }
}
/* The log method of the console object is being called by one arguments, the string
being called by the variable name. */
console.log(introduceWarnerBro('yakko'));

/* The function ...  is being defined with a parameter ... of type string and of type string.
There is a switch statement with a conditional expression evaluating the variable name.
There is a case clause checking for the strings action, comedy, horror, etc... .
There is a default clause.
We are returning a string. */
function recommendMovie(genre: string): string {
  switch (genre.toLowerCase()) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Ted';
    case 'horror':
      return 'It';
    case 'drama':
      return 'Fall Guy';
    case 'musical':
      return 'Moana';
    case 'sci-fi':
      return 'Godzilla Minus One';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
/* The log method of the console object is being called by one arguments, the string
being called by the variable recommendMovie. */
console.log(recommendMovie('action'));
console.log(recommendMovie('comedy'));
console.log(recommendMovie('romance'));
