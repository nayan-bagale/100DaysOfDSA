/**
 * Swaps two elements in an array.
 *
 * @param {number} first - The index of the first element to be swapped.
 * @param {number} second - The index of the second element to be swapped.
 * @param {number[]} array - The array in which the elements will be swapped.
 * @return {void} This function does not return a value.
 */

const swap = (first: number, second: number, array: number[]): void => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

const missingNumber = (nums: number[]): number => {
  let i = 0;

  while (i < nums.length) {
    if (i === nums[i] || nums[i] === nums.length) {
      i++;
      continue;
    }
    swap(i, nums[i], nums);
  }

  i = 0;
  while (i < nums.length) {
    if (nums[i] !== i) return i;
    i++;
  }

  return nums.length;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
