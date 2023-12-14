var splitingArray = function (
  nums: number[],
  target: number,
  l: number,
  r: number
): number {
  let mid: number;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

var search = (nums: number[], target: number): number => {
  let start = 0,
    end = nums.length - 1,
    last = nums.length - 1,
    mid: number;
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

  if (nums[mid] === target) return mid;

  let lans = splitingArray(nums, target, 0, mid);

  if (lans === -1) {
    return splitingArray(nums, target, mid + 1, last);
  } else {
    return lans;
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
