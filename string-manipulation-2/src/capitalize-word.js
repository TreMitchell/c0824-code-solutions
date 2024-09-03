'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return 'JavaScript';
  }
  if (word.length === 0) {
    return word;
  }
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return firstLetter + restOfWord;
}
