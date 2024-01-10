function subsets(nums: number[]): number[][] {
  let res: number[][] = [];
  let subset: number[] = [];

  (function dfs(i: number) {
    if (i >= nums.length) {
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


console.log(subsets([1,2,3]))