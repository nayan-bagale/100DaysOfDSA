function combinationSum3(k: number, n: number): number[][] {
  let ans: number[][] = [];

  helper([], k, n, ans);

  return ans;
}

const helper = (
  arr: number[],
  k: number,
  n: number,
  ans: number[][]
) => {
  if (arr.length === k) {
    if (n === 0) {
      ans.push([...arr]);
    }
    return;
  }

  for (let i = (arr[arr.length - 1] ?? 0) + 1; i <= Math.min(9, n); i++) {
    if (n - i <= -1) return;

    arr.push(i);
    helper(arr, k, n - i, ans);
    arr.pop();
  }
  return;
};

console.log(combinationSum3(3, 9));
