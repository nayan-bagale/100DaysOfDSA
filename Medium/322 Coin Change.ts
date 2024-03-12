//TODO: Complete the code.

function coinChange(coins: number[], amount: number): number {
  let j = coins.length - 1,
    count = 0,
    sum = 0;
  if (amount === 0) return 0;

  while (j >= 0) {
    count++;
    sum += coins[j];
    if (sum === amount) {
      return count;
    } else if (sum > amount) {
        sum -= coins[j]
      j--;
      count--;
    }
  }
  console.log(sum)
  return count;
}

// console.log(coinChange([1,2,5],11))
console.log(coinChange([186, 419, 83, 408], 6249));