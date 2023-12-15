/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

const binarySearch = (
  left: number,
  right: number,
  arr: MountainArray,
  target: number,
  ascending: boolean
): number => {
  let mid: number;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    let value = arr.get(mid);
    if (value === target) return mid;
    if (ascending) {
      if (value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (value > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

function findInMountainArray(target: number, mountainArr: MountainArray) {
  let mid: number,
    start = 0,
    end = mountainArr.length() - 1;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    let value = mountainArr.get(mid);
    if (value < mountainArr.get(mid - 1)) {
      end = mid - 1;
    }
    if (value < mountainArr.get(start)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  let leftIndex = binarySearch(0, end, mountainArr, target, true);
  if (leftIndex >= 0) {
    return leftIndex;
  }
  let rightIndex = binarySearch(
    end,
    mountainArr.length(),
    mountainArr,
    target,
    false
  );
  if (rightIndex >= 0) {
    return rightIndex;
  }

  return -1;
}
