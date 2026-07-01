const numbers = [3, 7, 2, 8, 2];
const queries = [
  [0, 1],
  [1, 3],
  [2, 4],
];

// Brute force approach
// function findMean(numbers: number[], queries: number[][]) {
//   for (let i = 0; i < queries.length; i++) {
//     const [start, end] = queries[i];

//     let sum = 0;
//     for (let j = start; j <= end; j++) {
//       sum += numbers[j];
//     }

//     const mean = Math.floor(sum / (end - start + 1));
//     console.log(mean);
//   }
// }

// Optimized approach using prefix sum
function findMean(numbers: number[], queries: number[][]) {
  const prefixSum = [0];

  for (let i = 0; i < numbers.length; i++) {
    prefixSum.push(prefixSum[i] + numbers[i]);
  }

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const sum = prefixSum[end + 1] - prefixSum[start];
    const mean = Math.floor(sum / (end - start + 1));
    console.log(mean);
  }
}

findMean(numbers, queries);
