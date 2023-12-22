const findMin = (nums: number[]) => findminRecur(nums, 0, nums.length - 1);

const findminRecur = (nums: number[], start: number, end: number): number => {
  if (start >= end) {
    return nums[start];
  }

  let mid = start + Math.floor((end - start) / 2);

  if (end > mid && nums[mid] < nums[mid - 1]) {
    return nums[mid];
  }

  if (nums[end] === nums[end - 1]) {
    return findminRecur(nums, start, end - 1);
  }

  if (nums[start] === nums[end]) {
    if (nums[start] > nums[start + 1]) {
      return nums[start + 1];
    }

    if (nums[end - 1] > nums[end]) {
      return nums[end];
    }

    return findminRecur(nums, start + 1, end - 1);
  } else if (nums[mid] > nums[end]) {
    return findminRecur(nums, mid + 1, end);
  } else {
    return findminRecur(nums, start, mid - 1);
  }
};

console.log(findMin([1, 3]));
console.log(findMin([9, 10, 22, 40, 60, 60, 0, 0, 0, 0, 0]));

// Below code implemented using loops
// const findMin = (nums: number[]) => {
//   let start = 0,
//     mid = -1,
//     end = nums.length - 1;
//   while (start < end) {
//     mid = start + Math.floor((end - start) / 2);

//     if (end > mid && nums[mid] < nums[mid - 1]) {
//       return nums[mid];
//     }
//     if (nums[end] === nums[end - 1]) {
//       end = end - 1;
//       continue;
//     }
//     if (nums[start] === nums[end]) {
//       if (nums[start] > nums[start + 1]) {
//         return nums[start + 1];
//       }
//       start++;
//       if (nums[end - 1] > nums[end]) {
//         return nums[end];
//       }
//       end--;
//     } else if (nums[mid] > nums[end]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return nums[start];
// };
