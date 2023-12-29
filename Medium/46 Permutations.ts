function permute(nums: number[]): number[][] {
  return helper([], nums);
}

const helper = (p: number[], up: number[]): number[][] => {
  if (up.length === 0) {
    return [p];
  }
  let arr: number[][] = [];
  for (let num of up) {
    let tempArr = up.filter((item) => num !== item);
    let result = helper([...p, num], tempArr);
    arr.push(...result);
  }
  return arr;
};

console.log(permute([1, 2, 3]));
