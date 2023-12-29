// #TODO:Complete this Code

function solveNQueens(n: number): any {
  const board = new Array(n).fill(new Array(n).fill(false));
  return helper(board, 0, 0);
}

const helper = (board: boolean[][], row: number, col: number): any => {
    if(row === board.length){
        console.log(row);
    }

    if(col < board.length){
        helper(board,row,col++)
    }

    if(row < board.length){
        helper(board,row++,col)
    }


};

console.log(solveNQueens(3));
//[q...,..q.]
