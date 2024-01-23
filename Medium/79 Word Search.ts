function exist(board: string[][], word: string): boolean {
  const visited = Array.from({ length: board.length }, () =>
    new Array(board[0].length).fill(false)
  );

  const dfs = (r: number, c: number, i: number): boolean => {
    if (word.length === i) return true;

    if (r < 0 || c < 0 || board.length <= r || board[0].length <= c || board[r][c] !== word[i] || visited[r][c]) return false;

    visited[r][c] = true;
    let res = dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1)
    visited[r][c] = false;
    return res;
  };

  for(let i=0; i< board.length; i++){
    for(let j=0; j< board[0].length; j++){
        if(dfs(i,j,0)) return true
    }
  }

  return false
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"));
console.log(exist([["a"]], "a"));
