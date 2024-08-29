/* exported countdown */
function countdown(num: number): number[] {
  const numCount: number[] = [];
  for (let i = num; i >= 0; i--) {
    numCount.push(i);
  }
  return numCount;
}
