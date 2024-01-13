function subsetsWithDup(nums: number[]): number[][] {
    let res: number[][] = [];
    let subset: number[] = [];
    nums.sort((a, b) => a - b);
    (function helper(start: number) {
        res.push([...subset]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            subset.push(nums[i]);
            helper(i + 1);
            subset.pop();
        }
    })(0);

    return res;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([4, 4, 4, 1, 4]));
