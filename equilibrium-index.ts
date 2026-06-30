const numbers = [1, 2, 0, 3];

function findEquilibriumIndex(arr: number[]) {
  const totalSum = arr.reduce((prev, curr) => prev + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
  }

  return -1;
}

console.log(findEquilibriumIndex(numbers));
