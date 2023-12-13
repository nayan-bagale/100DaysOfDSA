const swap = (first: number, second: number, array: number[]): void => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

const missingNumber = (nums: number[]): number => {
  let i = 0;
  while (i < nums.length) {
    let current = nums[i] - 1;
    if (current !== i && nums[current] !== nums[i]) {
      swap(current, i, nums);
    } else {
      i++;
    }
  }

  return nums[i - 1];
};

console.log(missingNumber([1, 3, 4, 2, 2])); //2
console.log(missingNumber([3, 1, 3, 4, 2])); //3
console.log(missingNumber([2, 1, 2])); //2
console.log(missingNumber([4, 3, 1, 4, 2])); //4
console.log(
  missingNumber([
    8, 7, 1, 10, 17, 15, 18, 11, 16, 9, 19, 12, 5, 14, 3, 4, 2, 13, 18, 18,
  ])
); //4
