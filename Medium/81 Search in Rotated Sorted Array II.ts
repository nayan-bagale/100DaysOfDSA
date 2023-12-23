const search = (nums:number[],target:number) => modifiedBinarySearch(nums,target,0,nums.length-1);

const modifiedBinarySearch = (
  nums: number[],
  target: number,
  start: number,
  end: number
) => {
  if (start > end) return false;

  let mid = start + Math.floor((end - start) / 2);
  if (nums[mid] === target) return true;

  if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
    return modifiedBinarySearch(nums, target, start + 1, end - 1);
  }

  if (nums[start] <= nums[mid]) {
    if (nums[start] <= target && target <= nums[mid]) {
      return modifiedBinarySearch(nums, target, start, mid - 1);
    } else {
      return modifiedBinarySearch(nums, target, mid + 1, end);
    }
  } else {
    if (nums[mid] <= target && target <= nums[end]) {
      return modifiedBinarySearch(nums, target, mid + 1, end);
    } else {
      return modifiedBinarySearch(nums, target, start, mid - 1);
    }
  }
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 3], 3));
console.log(search([1, 0, 1, 1, 1], 0));
console.log(search([5, 1, 3], 5));
