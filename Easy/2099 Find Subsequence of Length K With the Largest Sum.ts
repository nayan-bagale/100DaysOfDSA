//TODO:Complete it

const sum = (nums: number[], start: number, end: number): number => {
  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum += nums[i];
    
  }
  return totalSum;
};

function maxSubsequence(nums: number[], k: number): number[] {
    nums.sort((a, b) => a - b);
  let start = 0,
    end = 0;
  let i = 0,
    j = k - 1;
  let maxVal = nums[0];

  while (j < nums.length) {
    let temp = Math.max(maxVal, sum(nums, i, j));
    if(temp !== maxVal){
        maxVal=temp;
        start = i;
        end = j;
    }
    i++;
    j++;
  }
  return nums.slice(start, end + 1);
}

console.log(maxSubsequence([2, 1, 3, 3], 2))
console.log(maxSubsequence([-1,-2,3,4], 3))
console.log(maxSubsequence([3,4,3,3], 2))
console.log(maxSubsequence([50, -75], 2));