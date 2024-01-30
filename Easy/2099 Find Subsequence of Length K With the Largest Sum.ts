//TODO:Complete it

function maxSubsequence(nums: number[], k: number) {
  let ans:number[] = [];
  let res: {[key: string] : number[]} = {};

  const dfs = (c:number) => {
    if(ans.length === k){
      let tempSum = ans.reduce((a,c) => a+c)
      res[tempSum] = [...ans];
      return;
    }

    for(let i=c; i<nums.length; i++){
      ans.push(nums[i])
      dfs(i+1)
      ans.pop();
    }

  }
  dfs(0);

  let keys = Object.keys(res).map((e) => +e)
  let max = keys[0];
  for(let i=1; i<keys.length; i++){
    if(max < keys[i]) max = keys[i];
  }

  return res[max]
}

// console.log(maxSubsequence([2, 1, 3, 3], 2))
// console.log(maxSubsequence([-1,-2,3,4], 3))
// console.log(maxSubsequence([3,4,3,3], 2))
// console.log(maxSubsequence([50, -75], 2));
console.log(maxSubsequence([33,-27,-9,-83,48], 2));
console.log(maxSubsequence([63,-74,61,-17,-55,-59,-10,2,-60,-65], 9));