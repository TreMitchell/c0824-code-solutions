function getRangeReport(start: number, end: number): number[] {
  let total: number = 0;
  const odds: number[] = [];
  const evens: number[] = [];
  const range: number[] = [];

  for (let i = start; i <= end; i++) {
    total += i;
    range.push(i);
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  const average = total / range.length;

  return {
    total,
    odds,
    evens,
    range,
    average,
  };
}
const report = getRangeReport(7, 13);
console.log(report);
