/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix:number[][]): void {
    let rows: number[] = [];
    let cols: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    rows.push(1);
  }
  for (let i = 0; i < matrix[0].length; i++) {
    cols.push(1);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 0;
        cols[j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows[i] === 0 || cols[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setZeroes(matrix);
console.log(matrix);

let matrix1 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrix1);
console.log(matrix1);
