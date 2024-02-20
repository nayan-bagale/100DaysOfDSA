function spiralOrder(matrix: number[][]): number[] {
  let ans: number[] = [];
  let fRow = 0,
    lRow = matrix.length - 1,
    fCol = 0,
    lCol = matrix[0].length - 1;

  while (fRow <= lRow && fCol <= lCol) {
    for (let i = fCol; i <= lCol; i++) ans.push(matrix[fRow][i]);

    fRow++;

    for (let i = fRow; i <= lRow; i++) ans.push(matrix[i][lCol]);

    lCol--;

    if (fRow <= lRow) {
      for (let i = lCol; i >= fCol; i--) ans.push(matrix[lRow][i]);

      lRow--;
    }

    if (fCol <= lCol) {
      for (let i = lRow; i >= fRow; i--) ans.push(matrix[i][fCol]);

      fCol++;
    }
  }

  return ans;
}

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
