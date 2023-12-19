function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let temp: number;

  if (n === 0) return 1;

  temp = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) return temp * temp;
  else return x * temp * temp;
}

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
