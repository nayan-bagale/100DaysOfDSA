/**
 * Calculates the maximum profit that can be obtained from a given array of prices.
 *
 * @param {number[]} prices - An array of prices.
 * @return {number} The maximum profit.
 */

function maxProfit(prices: number[]): number {
  let left = 0,
    right = 1,
    max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let current_profit = prices[right] - prices[left];
      max_profit = Math.max(current_profit, max_profit);
    } else {
      left = right;
    }
    right++;
  }

  return max_profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
