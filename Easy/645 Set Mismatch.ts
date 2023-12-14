const swap = (first: number, second: number, array: number[]): void => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

function findErrorNums(nums: number[]): number[] {
  let i = 0;
  while (i < nums.length) {
    let currentValue = nums[i] - 1;
    if (currentValue !== i && nums[currentValue] !== nums[i]) {
      swap(currentValue, i, nums);
    } else {
      i++;
    }
  }

  let array: number[] = [];

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k + 1) {
      array.push(nums[k]);
      array.push(k + 1);
    }
  }

  return array;
}

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
