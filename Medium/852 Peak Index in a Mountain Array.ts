function peakIndexInMountainArray(arr: number[]): number {
  let start = 0,
    mid: number,
    end = arr.length - 1;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (arr[mid] < arr[mid - 1]) {
      end = mid - 1;
      continue;
    }

    if (arr[mid] < arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(
  peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
);
console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));
