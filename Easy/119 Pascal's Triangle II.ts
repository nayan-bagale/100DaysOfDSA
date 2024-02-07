function getRow(rowIndex: number): number[] {
  const triangle: number[][] = [];
  for (let row = 0; row <= rowIndex; row++) {
    let arr: number[] = [1];
    var i: number = 0;
    for (let col = 1; col <= row; col++) {
      if (col === row) {
        arr.push(1);
        break;
      }
      while (i < triangle.length) {
        let l = triangle[triangle.length - 1][i];
        let r = triangle[triangle.length - 1][i + 1];

        arr.push(l + r);
        i++;
        break;
      }
    }
    triangle.push(arr);
  }

  return triangle[triangle.length - 1];
}
