const numbers = [10, 5, 2, 7, 1, -10];
const k = 15;

// // Brute froce approach
// function longestSubarray(arr: number[], k: number): number {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;

//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];

//       if (sum === k) {
//         const subLength = j - i + 1;
//         max = Math.max(max, subLength);
//       }
//     }
//   }

//   return max;
// }

// prefix sum approach
function longestSubarray(arr: number[], k: number): number {
  const sumMap = new Map<number, number>();

  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLength = i + 1;
    }

    if (sumMap.has(sum - k)) {
      const subLength = i - sumMap.get(sum - k)!;
      maxLength = Math.max(maxLength, subLength);
    }

    sumMap.set(sum, i);
  }

  return maxLength;
}

console.log(longestSubarray(numbers, k));
