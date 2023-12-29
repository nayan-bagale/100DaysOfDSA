//TODO: Time Exceding Error Fix it 

function getPermutation(n: number, k: number): string {
  const hashMap:{[key:string]: number} = {k: k};
  let str = ''
  for(let i=1; i<=n; i++) str += i;
  return  calcPermutations('',str,hashMap);
}

const calcPermutations = (
  p: string,
  up: string,
  k: { [key: string]: number }
): any => {
  if (up === "") {
    k.k = k.k-1;
    return p;
  }

  for (let char of up) {
    let result = calcPermutations(p + char, up.replace(char, ""), k);
    if (k.k < 1) return result;
  }
};

console.log(getPermutation(9,101134))