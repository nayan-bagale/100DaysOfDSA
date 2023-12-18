function findKthPositive(arr: number[], k: number): number {
  let missingNum = 1;
  let numOrder = 1;
  let size = Math.max(arr.length, arr.length + k);
  for (let i = 0; i < size; i++) {
    if (i > arr.length - 1) {
      if (k == missingNum) {
        return numOrder;
      }
      numOrder++;
      missingNum++;
    } else if (arr[i] == numOrder) {
      numOrder++;
    } else {
      if (k == missingNum) {
        return numOrder;
      }
      numOrder++;
      missingNum++;
      i--;
    }
  }
  return numOrder;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
