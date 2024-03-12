function generateParenthesis(n: number): string[] {
    let res:string[] = []
    let dfs = (left:number, right:number, str:string) => {
        if (left === n && right === n) {
            res.push(str)
            return
        }
        if (left < n) {
            dfs(left + 1, right, str + '(')
        }
        if (right < left) {
            dfs(left, right + 1, str + ')')
        }
    }
    dfs(0, 0, '')
    return res
}
// Time complexity: O(2^2n)
// Space complexity: O(n)
console.log(generateParenthesis(3));
