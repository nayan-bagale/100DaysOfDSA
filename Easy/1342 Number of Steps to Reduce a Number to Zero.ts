function numberOfSteps(num: number): number {
  return helper(num, 0);
}

const helper = (n: number, steps: number): number => {
  if (n === 0) return steps;

  if (n % 2 === 0) {
    return helper(n / 2, steps + 1);
  } else {
    return helper(n - 1, steps + 1);
  }
};
console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
