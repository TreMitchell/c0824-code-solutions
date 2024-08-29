/* exported getIndexes */
function getIndexes(array: string[]): number[] {
  const indexes: number[] = [];
  for (let i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
