function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let list = new Array(numRows).fill("");
  let k = 0,
    flag = false;
  for (let i = 0; i < s.length; i++) {
    if (k === numRows - 1 || k === 0) flag = !flag;

    list[k] += s[i];

    if (flag) k++;
    else k--;
  }
  return list.join("");
}

console.log(convert("AB", 1));
console.log(convert("PAYPALISHIRING", 1));
