function partition(s: string): string[][] {
    let result: string[][] = [];
    let part: string[] = [];

    const dfs = (i:number) => {
        if (i >= s.length) {
            result.push([...part]);
            return;
        }

        for(let j=i; j<s.length; j++){
            if(helper(s, i, j)){
                part.push(s.slice(i,j+1));
                dfs(j+1);
                part.pop()
            }
        }
    }
    const helper = (s:string, l:number, r:number) => {
        while(l < r){
            if(s[l] !== s[r]) return false
            l = l+1;
            r = r-1;
        }
        return true
    }

    dfs(0);
    return result;
}

console.log(partition("aab"));
console.log(partition("a"));