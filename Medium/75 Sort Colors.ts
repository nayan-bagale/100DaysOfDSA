// TODO: Post it on social media
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let red = 0,
    white = 0,
    blue = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      red += 1;
    } else if (nums[i] === 1) {
      white += 1;
    } else if (nums[i] === 2) {
      blue += 1;
    } else {
      throw Error("Invalid Color");
    }
  }

  for (let i = 0; i < red; i++) {
    nums[i] = 0;
  }
  for (let i = 0; i < white; i++) {
    nums[red + i] = 1;
  }
  for (let i = 0; i < blue; i++) {
    nums[red + white + i] = 2;
  }

  //   console.log(red, white, blue);
  console.log(nums);
}

sortColors([2, 0, 2, 1, 1, 0]);
// Output: [0,0,1,1,2,2]
sortColors([2, 0, 1]);
// Output: [0,1,2]
