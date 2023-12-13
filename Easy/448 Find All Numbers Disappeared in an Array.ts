const swap = (first: number, second: number, array: number[]): void => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

function findDisappearedNumbers(nums: number[]): number[] {
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
    if (nums[k] - 1 !== k) {
      array.push(k + 1);
    }
  }

  return array;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
