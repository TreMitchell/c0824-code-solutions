/* exported reverseWord */
function reverseWord(word: string): string {
  let reverse: string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
