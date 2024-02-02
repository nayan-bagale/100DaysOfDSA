function plusOne(digits: number[]): number[] {
  let lastDigit = 1;
  let carry = 1;
  let res: number[] = [];
  for (let i = digits.length - 1; 0 <= i; i--) {
    let value = digits[i] + carry;

    lastDigit = value % 10;
    carry = Math.floor(value / 10);

    res.push(lastDigit);

    if (i === 0 && carry !== 0) {
      res.push(carry);
    }
  }

  return res.reverse();
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
