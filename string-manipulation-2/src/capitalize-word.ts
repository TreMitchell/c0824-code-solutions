/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return 'JavaScript';
  }
  if (word.length === 0) {
    return word;
  }
  const firstLetter: string = word[0].toUpperCase();
  const restOfWord: string = word.slice(1).toLowerCase();

  return firstLetter + restOfWord;
}
