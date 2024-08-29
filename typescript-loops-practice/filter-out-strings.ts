/* exported filterOutStrings */
function filterOutStrings(values: string[]): unknown[] {
  return values.filter((value) => typeof value !== 'string');
}
