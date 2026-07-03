const prefixSum = [5, 7, 10, 11, 18];

function giveOrginialArray(prefixSum: number[]): number[] {
  const arr = [prefixSum[0]];

  for (let i = 1; i < prefixSum.length; i++) {
    arr.push(prefixSum[i] - prefixSum[i - 1]);
  }

  return arr;
}

console.log(giveOrginialArray(prefixSum));
