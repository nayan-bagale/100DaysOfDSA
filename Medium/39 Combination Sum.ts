function combinationSum(candidates: number[], target: number): number[][] {
  let ans: number[][] = [];
  findCombinations(0, target, candidates, ans, []);
  return ans;
}

const findCombinations = (
  index: number,
  target: number,
  arr: number[],
  ans: number[][],
  ds: number[]
) => {
  if (index === arr.length) {
    if (target === 0) {
      ans.push([...ds]);
    }
    return;
  }

  if (arr[index] <= target) {
    ds.push(arr[index]);
    findCombinations(index, target - arr[index], arr, ans, ds);
    ds.pop();
  }
  findCombinations(index + 1, target, arr, ans, ds);
};

console.log(combinationSum([2, 3, 6, 7], 7));
