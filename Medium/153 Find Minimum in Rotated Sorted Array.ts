function findMin(nums: number[]): number {
  let start = 0,
    end = nums.length - 1,
    last = nums.length - 1,
    mid = 0;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[last]) {
      start = mid + 1;
    } else if (nums[mid] < nums[last]) {
      end = mid - 1;
    } else {
      break;
    }
  }
  mid = nums[mid] > nums[mid + 1] ? mid + 1 : mid;
  return nums[mid];
}

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
