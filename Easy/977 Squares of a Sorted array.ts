function sortedSquares(nums: number[]): number[] {
  return nums
    .map((item) => Math.pow(item, 2))
    .sort(function (a, b) {
      return a - b;
    });
}
