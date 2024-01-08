function reverse(x: number): number {
  let result = 0;
  if (x < 0) {
    result = parseInt(String(x).split("").slice(1).reverse().join("")) * -1;
  } else {
    result = parseInt(String(x).split("").reverse().join(""));
  }
  if (-1 * 2 ** 31 > result || result > 2 ** 31 - 1) {
    return 0;
  }
  return result;
}
