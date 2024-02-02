function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
