import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Tré');

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
