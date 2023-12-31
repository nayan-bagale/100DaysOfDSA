const isSafe = (board: boolean[][], row: number, col: number): boolean => {
  //vertical
  for (let i = row; i >= 0; i--) if (board[row - i][col]) return false;
  
  //diagonal left
  let minLeft = Math.min(row, col);
  for (let i = minLeft; i >= 0; i--) if (board[row - i][col - i]) return false;

  //diagonal right
  let minRight = Math.min(row, board[0].length - col + 1);
  for (let i = 0; i <= minRight; i++) if (board[row - i][col + i]) return false;

  return true;
};

const helper = (board: boolean[][], row: number, ans: string[][]): string[][] => {
  if (row === board.length) {
    let list = board.map((row) => row.map((col) => (col ? "Q" : ".")).join(""));
    ans.push(list);
    return ans;
  }

  for (let col = 0; col < board[0].length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = true;
      helper(board, row + 1, ans);
      board[row][col] = false;
    }
  }

  return ans;
};

function solveNQueens(n: number): string[][] {
  const board = Array.from(Array(n), () => new Array(n).fill(false));
  return helper(board, 0, []);
}

console.log(solveNQueens(4));
