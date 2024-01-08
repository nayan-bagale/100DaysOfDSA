//TODO: Complete the code.

function subsetsWithDup(nums: number[]): any {
    let ans:number[][] = [];
    let stack:number[] = [];
    nums.sort((a,b) => a - b);
    helper(stack,nums,0)
}
const helper = (stack:number[],nums:number[], count:number) => {
    if(nums.length === count ){
        // console.log(stack)
        return stack
    }

    for(let i = 0 ; i<=count; i++){
        console.log(i,count)
        if (i > 0 && nums[i - 1] === nums[i]) continue;
        stack.push(nums[i]);
        console.log(stack)
        helper(stack,nums,count+1)
        stack.pop()
    }
}

console.log(subsetsWithDup([1, 2, 2]));
// console.log(subsetsWithDup([0]));