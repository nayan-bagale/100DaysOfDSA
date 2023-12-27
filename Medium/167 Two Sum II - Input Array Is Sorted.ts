function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) break;
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  return [left + 1, right + 1];
}
