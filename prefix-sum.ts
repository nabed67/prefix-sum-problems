const numbers = [10, 20, 30, 40, 50];

function main() {
  const sum: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      sum[i] = numbers[i];
    } else {
      sum[i] = sum[i - 1] + numbers[i];
    }
  }

  console.log(sum);
}

main();
