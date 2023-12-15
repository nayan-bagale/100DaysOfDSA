function findMedianSortedArrays(nums1: number[], nums2: number[]): string {
  let size1 = nums1.length,
    size2 = nums2.length,
    i = 0,
    j = 0,
    arr: number[] = [];
  while (size1 + size2 > j + i) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i = i + 1;
      continue;
    }

    if (nums1[i] > nums2[j]) {
      arr.push(nums2[j]);
      j = j + 1;
      continue;
    }

    if (nums1[i] !== undefined) {
      arr.push(nums1[i]);
      i++;
      continue;
    }

    if (nums2[j] !== undefined) {
      arr.push(nums2[j]);
      j++;
      continue;
    }

    break;
  }

  if ((arr.length - 1 - 0) % 2 === 0) {
    return arr[(arr.length - 1 - 0) / 2].toFixed(5);
  } else {
    let mid = 0 + Math.floor((arr.length - 1 - 0) / 2);
    return ((arr[mid] + arr[mid + 1]) / 2).toFixed(5);
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
