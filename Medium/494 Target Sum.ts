function findTargetSumWays(nums: number[], target: number): number {
  const memo: {
    [key: string]: number;
  } = {};
  
  const helper = (target: number, i: number): number => {
    if (i === nums.length) {
      return target === 0 ? 1 : 0;
    }

    const key = `${i}-${target}`;
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    const waystoadd = helper(target - nums[i], i + 1);
    const waystosub = helper(target + nums[i], i + 1);

    const total = waystoadd + waystosub;
    memo[key] = total;

    return total;
  };
  return helper(target, 0);
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
console.log(findTargetSumWays([1], 1));
