const numbers = [1, 2, 3, 4, 5, 5];

function canSplit(arr: number[]) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  let prefixSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (prefixSum === totalSum - prefixSum) {
      return true;
    }

    prefixSum += arr[i];
  }

  return false;
}

console.log(canSplit(numbers));
