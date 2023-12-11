/**
 * Searches for the range of indices in an array where the target number is located.
 *
 * @param {number[]} nums - The array to search in.
 * @param {number} target - The target number to search for.
 * @return {number[]} An array containing the starting and ending indices of the target in the given array. If the target is not found, [-1, -1] is returned.
 */

var searchRange = function (nums: number[], target: number): number[] {
  if (nums.length < 1) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;
  let mid = 0,
    arr = [-1, -1];
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] == target) {
      break;
    }
    if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }

  for (let i = 0; i <= mid + 1; i++) {
    if (nums[mid + i] === target) arr[1] = mid + i;
    if (nums[mid - i] === target) arr[0] = mid - i;
  }

  return arr;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
