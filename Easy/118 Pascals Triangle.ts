/**
 * Function: generate(numRows)
 * 
 * Description:
 * This function generates Pascal's Triangle up to a specified number of rows.
 * 
 * Parameters:
 * numRows: The number of rows in Pascal's Triangle to generate. It should be a non-negative integer.
 * 
 * Returns:
 * An array of arrays representing Pascal's Triangle. Each inner array represents a row of the triangle.
 * 
 * Example:
 * generate(5) returns [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
 * 
 * Note:
 * In Pascal's Triangle, each number is the sum of the two numbers directly above it.
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows: number): number[][] => {
  const triangle: number[][] = [];
  for (let row = 0; row < numRows; row++) {
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

  return triangle;
};

console.log(generate(5));
console.log(generate(1));
