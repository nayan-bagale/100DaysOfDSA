//TODO: Complete the code.

function subsetsWithDup(nums: number[]): any {
  let res: number[][] = [];
  let subset: number[] = [];

  nums.sort((a, b) => a - b);

  (function dfs(i: number) {
    if (i >= nums.length) {
        let bool = res.some((x) => x.toString() === subset.toString());
        if (bool) return;
        let subsetSum = subset.reduce((a, b) => a + b, 0);
      if (subsetSum !== 0 && bool) return;
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);
    subset.pop();
    dfs(i + 1);
  })(0);

  return res;
}

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([4, 4, 4, 1, 4]));
