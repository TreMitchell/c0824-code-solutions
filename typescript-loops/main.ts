/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

/*  A function named .. is being defined with no parameters, & the return type number.
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

/* A function named .. is being defined with no parameters, & the return type number.
 */
function getEvenNumbersToTwenty(): number[] {
  const numbers: number[] = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber * 2);
    currentNumber++;
  }
  return numbers;
}

/* A function named .. is being defined with two parameters, the variables words & times with types strings
& number & the return type string.
The number 1 & the empty string is being assigned to the variables count and repeated.
While loop that has a conditional expression of ... .
The variable word is being concatenated with the variable repeated and the result is being assigned to repeated.
 */
function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

/* A function named .. is being defined with no parameters, & the return type number.
 We have a for loop  */
function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

/* A function named .. is being defined with no parameters, & the return type number.
 */
function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}

/* A function named .. is being defined with no parameters, & the return type number.


We have a for loop const key in object.
The push method of the keys object is being called with one object, key.
We are returning the variable keys. */
function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
/* A function named .. is being defined with no parameters, & the return type number.

We have a for loop const key in object.
The push method of the values object is being called with one object, object that is
calling key.
We are returning the variable values. */
function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
