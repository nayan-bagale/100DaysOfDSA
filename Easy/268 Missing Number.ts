const swap = (first: number, second: number, array: number[]): void => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

const missingNumber = (nums: number[]): number => {
  let i = 0;

  while (i < nums.length) {
    if (i !== nums[i] && nums[i] < nums.length) {
      swap(i, nums[i], nums);
    } else {
      i++;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index) return index;
  }

  return nums.length;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
