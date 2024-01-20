function permuteUnique(nums: number[]): number[][] {
    let ans: number[][] = [];
    let permut:number[] = [];
    let map:{
        [key: number]: number
    } = {};
    for (let n of nums) map[n] = 0;
    for (let n of nums) map[n] += 1;

    const dfs = () => {
        if(permut.length === nums.length){
            ans.push([...permut]);
            return;
        }

        for(let n in map){
            if(map[n] > 0){
                permut.push(parseInt(n));
                map[n] -= 1;
                
                dfs();

                map[n] += 1;
                permut.pop()
            }
        }

    }

    dfs();
    return ans;

};

console.log(permuteUnique([1, 1, 2]))
// console.log(permuteUnique([1, 2, 3]))