function plusOne(digits: number[]): number[] {
  let lastVal = 1;
  let div = 1;
  let res: number[] = [];
  for (let i = digits.length - 1; 0 <= i; i--) {
    let value = digits[i] + div;

    lastVal = value % 10;
    div = Math.floor(value / 10);

    res.push(lastVal);

    if (i === 0 && div !== 0) {
      res.push(div);
    }
  }

  return res.reverse();
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
