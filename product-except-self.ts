const numbers = [10, 3, 5, 6, 2];

// // Brute force approach
// function productExceptSelf(arr: number[]): number[] {
//   const result: number[] = [];
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     let sum = 1;

//     for (let j = 0; j < length; j++) {
//       if (i !== j) {
//         sum *= arr[j];
//       }
//     }

//     result.push(sum);
//   }

//   return result;
// }

// Prefix sum approach
function productExceptSelf(arr: number[]): number[] {
  const totalSum = arr.reduce((acc, curr) => acc * curr, 1);
  return arr.map((num) => totalSum / num);
}

console.log(productExceptSelf(numbers));
