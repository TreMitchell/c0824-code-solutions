/* exported addSuffixToAll */
function addSuffixToAll(words: string, suffix: string): string[] {
  const array: string[] = [];
  for (const word of words) {
    array.push(word + suffix);
  }
  return array;
}
