const swap = (first: number, second: number, array: number[]): void => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

function firstMissingPositive(nums: number[]): number {
  let i = 0;

  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[correct] !== nums[i]) {
      swap(correct, i, nums);
    } else {
      i++;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) return index + 1;
  }

  return nums.length + 1;
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([1, 2, 3]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 1]));
