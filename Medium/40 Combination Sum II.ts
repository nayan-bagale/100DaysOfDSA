function combinationSum2(candidates: number[], target: number): number[][] {
  let ans: number[][] = [],
    stack: number[] = [];
  candidates.sort((a, b) => a - b);

  const helper = (target: number, count: number) => {
    if (target === 0) {
      ans.push([...stack]);
      return;
    }

    for (let i = count; i < candidates.length; i++) {
      if (target - candidates[i] <= -1) return;
      if (i > count && candidates[i] === candidates[i - 1]) continue;
      
      stack.push(candidates[i]);
      helper(target - candidates[i], i + 1);
      stack.pop();
    }
  };

  helper(target, 0);
  return ans;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
let arr = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

console.log(combinationSum2(arr, 30));
