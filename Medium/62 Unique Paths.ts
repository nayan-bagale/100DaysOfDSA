// TODO: time excede error fix it

function uniquePaths(m: number, n: number): number {
  let arr = new Array(m).fill([]).map(() => new Array(n).fill(false))
  return pathFinder(arr, 0, 0);
}

const pathFinder = (arr: boolean[][], r: number, c: number): number => {
  
  if (r === arr.length - 1 && c === arr[0].length - 1) {
    return 1;
  }
  let count = 0;
  if (r < arr.length) {
    count += pathFinder(arr, r + 1, c);
  }

  if (c < arr[0].length) {
    count += pathFinder(arr, r, c + 1);
  }

  return count;
};

console.table(uniquePaths(3, 7));
